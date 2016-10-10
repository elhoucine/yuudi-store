import { check } from 'meteor/check';
import Carts from '../carts.js';

Meteor.methods({
  addToCart(item, quantity=1) {
    check(item.name, String);
    check(item.price, Number);

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
    }

    // TODO: Check the product/pack exists


    //Add it to the cart
    // TODO: Check for duplication
    return Carts.update({userId: this.userId}, {
      '$push': {
        'items': { "item": item, "quantity": quantity}
      }
    });
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
