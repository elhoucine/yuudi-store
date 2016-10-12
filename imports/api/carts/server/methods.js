import { check } from 'meteor/check';
import Carts from '../carts.js';

Meteor.methods({
  addToCart(item, quantity=1) {
    check(item._id, String);
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


    // Check for duplication
    var userCart = Carts.findOne({"userId": this.userId, "items.ref": {$in: [item._id]}});
    if(userCart){
      // Incriment quantity
      return Carts.update({"userId": this.userId, "items.ref": {$in: [item._id]}},
        {$inc: {"items.$.quantity": 1}});
    }

    //Add new item to the cart
    return Carts.update({userId: this.userId}, {
      '$push': {
        'items': {
          "ref": item._id,
          "item": item,
          "quantity": quantity
        }
      }
    });
  },
  /**
  /* Remove items from Cart
  */
  removeFromCart(CartItemRef) {
    check(CartItemRef, String);

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    //Remove from the cart
    return Carts.update({userId: this.userId}, {
      '$pull': {
        'items': { "ref": CartItemRef}
      }
    });
  },
  /**
  * Inscriment quantity by 1
  */
  incriment(itemId) {
    check(itemId, String)

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    Carts.update({"userId": this.userId, "items.ref": {$in: [item._id]}},
      {$inc: {"items.$.quantity": 1}});
  },
  /**
  * Dicrement quantity by 1
  */
  incriment(itemId) {
    check(itemId, String)

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    Carts.update({"userId": this.userId, "items.ref": {$in: [item._id]}},
      {$inc: {"items.$.quantity": -1}});
  }
});
