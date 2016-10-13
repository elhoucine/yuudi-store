import { Session } from 'meteor/session';
import Carts from '/imports/api/carts/carts.js';

Template.myCartFull.helpers({
  cartItems() {
    const userCart = Carts.findOne();
    if (userCart && userCart.items) {
      const items = userCart.items;
      return items;
    }
  },
  totalItemsQuantity(itemsPrice, quantity){
    return itemsPrice*quantity;
  },
  cartSubtotal() {
    const userCart = Carts.findOne();
    if (userCart && userCart.items) {
      const items = userCart.items;
      var price = 0;
      items.forEach(function(elm) {
        price += (elm.item.price * elm.quantity);
      });
      Session.set('cartSubtotal', price);
      return price;
    }
  },
  totalCart() {
    // TODO: Calculate total.
    const shipping = 0;
    const packaging = 0;
    var totalUtilities = shipping + packaging;
    var total = Session.get('cartSubtotal') + totalUtilities;
    return total;
  },
  disableIncrement(quantity) {
    return quantity === 10;
  },
  disableDecrement(quantity) {
    return quantity === 1;
  }
});

Template.myCartFull.events({
  'click .minus': function(event) {
    const productRef = event.target.id.substr(1);
    Meteor.call("decrement", productRef, function(err, res) {
      if(err) {
        console.log(err);
      }
    })
  },
  'click .plus': function(event) {
    const productRef = event.target.id.substr(1);
    Meteor.call("increment", productRef, function(err, res) {
      if(err) {
        console.log(err);
      }
    })
  }
});
