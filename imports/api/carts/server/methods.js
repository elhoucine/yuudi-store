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
      // Check for Max increment
      userCart.items.forEach(function(elm) {
        if(elm.ref === item._id){
          if(elm.quantity > 9) {
            throw new Meteor.Error('Quantity cannot be more than 10');
          }
        }
      })
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
  increment(itemId) {
    check(itemId, String)

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    // Max increment
    var cart = Carts.findOne({"userId": this.userId, "items.ref": {$in: [itemId]}});
    if(cart) {
      cart.items.forEach(function(elm) {
        if(elm.ref === itemId){
          if(elm.quantity > 9) {
            throw new Meteor.Error('Quantity cannot be more than 10');
          }
        }
      })
    }

    Carts.update({"userId": this.userId, "items.ref": {$in: [itemId]}, "items.quantity": {$lt: 10}},
      {$inc: {"items.$.quantity": 1}});
  },
  /**
  * Dicrement quantity by 1
  */
  decrement(itemId) {
    check(itemId, String)

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    var cart = Carts.findOne({"userId": this.userId, "items.ref": {$in: [itemId]}});
    if(cart) {
      cart.items.forEach(function(elm) {
        if(elm.ref === itemId){
          if(elm.quantity <= 1) {
            throw new Meteor.Error('Quantity cannot be les than 1');
          }
        }
      })
    }

    Carts.update({"userId": this.userId, "items.ref": {$in: [itemId]}},
      {$inc: {"items.$.quantity": -1}});
  }
});
