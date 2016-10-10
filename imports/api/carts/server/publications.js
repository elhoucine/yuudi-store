import Carts from '../carts.js';

Meteor.publish('myCart', function(userId) {
  //A user should always have a cart.
  if( !Carts.findOne({userId: userId}) && Users.findOne(userId) ){
    Carts.insert({userId: userId});
  }
  return Carts.find({userId: userId});
});
