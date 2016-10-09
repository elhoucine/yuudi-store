import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Carts = new Meteor.Collection('carts');

CartsSchema = new SimpleSchema({
  userId: {
    type: SimpleSchema.RegEx.ObjectId
  },
  items: {
    type: [Object]
  },
});

/**
  Load the user cart.
  TODO: Or create an Empty cart on new user.
*/
Carts.getCart = function(userId){
  var cart = Carts.findOne({userId : userId});
  if(!cart){
    cart = {
      userId : userId,
      email : null,
      name :null,
      ip : null,
      created_at : new Date(),
      items : [],
      notes : [{
        note : "Cart created",
        created_at : new Date()
      }],
      status : "open",
      itemCount : 0,
      total : 0
    };

  }
  return cart;
};

export default Carts;
