import { check } from 'meteor/check';
import Carts from '../carts.js';

Meteor.methods({
  addToCart(Item) {
    check(Item.name, String);
    check(Item.price, Number);

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    // TODO: Check the product/pack exists


    //Add it to the cart
    // TODO: Check for duplication
    cart = Carts.update(this.userId, {
      '$push': {
        'items': Item
      }
    });

    return cart;
  },
  removeFromCart(CartItemId) {
    check(CartItemId, String);

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    //Remove from the cart
    cart = Carts.update(this.userId, {
      '$pull': {
        'items._id': CartItemId
      }
    });

    return cart;
  },
  updateQuantity() {
    // TODO
  }
});
