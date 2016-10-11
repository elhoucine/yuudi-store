import { Session } from 'meteor/session';
import Carts from '/imports/api/carts/carts.js';

Template.shoppingCartBox.helpers({
  cartItems() {
    const userCart = Carts.findOne();
    if (userCart && userCart.items) {
      const items = userCart.items;
      var count = 1;
      return _.map(items, function(item) {
        if(count < 4){
          return item;
          count++;
        }
      });
    }
  },
  itemsCount(){
    const userCart = Carts.findOne();
    if (userCart){
      Session.set("cartIsNotEmpty", !!userCart.items.length);
      return userCart.items.length;
    }
  },
  totalCartAmount() {
    // TODO: Calculate the total amount
    return 0;
  },
  cartIsNotEmpty() {
    return Session.get("cartIsNotEmpty");
  },
  _userCart() {
    return Carts.findOne();
  }
});

Template.shoppingCartBox.events({
  'click .remove': (event)=> {
    const itemRef = event.target.id.substr(1);
    Meteor.call('removeFromCart', itemRef, function(err, res){
      console.log('err', err);
      console.log('res', res);
    })
  }
})
