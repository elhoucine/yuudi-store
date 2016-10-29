import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import Carts from '/imports/api/carts/carts.js';
import Orders from '../orders.js';

Meteor.methods({
  addOrder() {
    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    //A user should always have a cart.
    if( !Carts.findOne({"userId": this.userId}) ){
      Carts.insert({
        userId: this.userId,
        items: []
      });

      throw new Meteor.Error('Can not order 0 products');
    }

    const userCart = Carts.find({userId: this.userId}).fetch();
    const userCartItems = userCart[0].items;

    //Add new order
    const newOrder = Orders.insert({
        userId: this.userId,
        status: 'created',
        items: userCartItems
      });

    // Notify
    const phoneNumber = Meteor.user().profile.phoneNumber;
    const fullName = Meteor.user().profile.fullName;
    Meteor.call("notifyBySms", fullName, phoneNumber);

    return newOrder;
  },
  notifyBySms(fullName, phoneNumber) {
    check(fullName, String);
    check(phoneNumber, String);
    this.unblock();

    try {
      var result = HTTP.call("GET", `https://rest.nexmo.com/sms/json?api_key=56d91d40&api_secret=43cd95c9ecb009bd&from=YUUDI&to=212679499888&text=New+Order+Placed+${fullName}+${phoneNumber}`);
      return true;
    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      throw new Meteor.Error('SMS Failed'+e);
    }
  }
});
