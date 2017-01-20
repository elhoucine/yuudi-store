import { Session } from 'meteor/session';
import Carts from '/imports/api/carts/carts.js';
import CartTools from '/imports/ui/components/cart/cartUtilities.js';

Template.myCartFull.helpers({
  cartItems: CartTools.cartItems(),
  /*----------*/
  totalItemsQuantity(itemPrice, quantity){
    return itemPrice * quantity;
  },
  /*----------*/
  cartSubtotal() {
    if(!Meteor.userId()){
      const userCart = Session.get("userCart");
      return calculateTotalPrice(userCart);
    }

    // Connected
    const userCart = Carts.findOne();
    return calculateTotalPrice(userCart);

    function calculateTotalPrice(userCart){
      if (userCart && userCart.items) {
        const items = userCart.items;
        var sum = _.reduce(items, function(memo, elm){return memo + (elm.item.price*elm.quantity)}, 0);
        Session.set('cartSubtotal', sum);
        return sum;
      }
    }
  },
  /*----------*/
  totalCart() {
    const shipping = 0;
    const packaging = 0;
    var totalUtilities = shipping + packaging;
    var total = Session.get('cartSubtotal') + totalUtilities;
    return total;
  },
  /*----------*/
  disableIncrement(quantity) {
    return quantity === 10;
  },
  /*----------*/
  disableDecrement(quantity) {
    return quantity === 1;
  }
});

Template.myCartFull.events({
  /*----------*/
  'click .minus': function(event) {
    const productRef = event.target.id.substr(1);

    if(!Meteor.userId()){
      var userCart = Session.get("userCart");
      var item = _.find(userCart.items, function(elm) {
        if(elm.ref === productRef){
          if(elm.quantity <= 1){
            return true;
          }
          elm.quantity--;
          return true;
        }
      });
      Session.setPersistent("userCart", userCart);
      return;
    }

    // Connected
    Meteor.call("decrement", productRef, function(err, res) {
      if(err) {
        console.log(err);
      }
    })
  },
  /*----------*/
  'click .plus': function(event) {
    const productRef = event.target.id.substr(1);

    if(!Meteor.userId()){
      var userCart = Session.get("userCart");
      var item = _.find(userCart.items, function(elm) {
        if(elm.ref === productRef){
          if(elm.quantity > 9){
            return true;
          }
          elm.quantity++;
          return true;
        }
      });
      Session.setPersistent("userCart", userCart);
      return;
    }

    // Connected
    Meteor.call("increment", productRef, function(err, res) {
      if(err) {
        console.log(err);
      }
    })
  },
  /*----------*/
  'click .remove': (event)=> {
    const itemRef = event.target.id.substr(1);

    if(!Meteor.userId()){
      var userCart = Session.get("userCart");
      var position = userCart.items.map(function(elm) { return elm.ref }).indexOf(itemRef);
      var deleted = userCart.items.splice(position, 1);
      Session.setPersistent("userCart", userCart);
      return;
    }

    // Connected
    Meteor.call('removeFromCart', itemRef, function(err, res){
      console.log('err', err);
      console.log('res', res);
    })
  }
});
