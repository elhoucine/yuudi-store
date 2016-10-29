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
    return Orders.insert({
        userId: this.userId,
        status: 'created',
        items: userCartItems
      });
  }
});
