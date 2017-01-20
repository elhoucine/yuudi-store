import { Session } from 'meteor/session';

var CartTools = function() {
  return {
    cartItems: ()=>{
      if(!Meteor.userId()){
        var userCart = Session.get("userCart");
        return showItems(userCart)
      }

      // Connected
      var userCart = Carts.findOne();
      return showItems(userCart);

      function showItems() {
        if (userCart && userCart.items) {
          const items = userCart.items;
          return items;
        }
      }
    },
  }
}();

export default CartTools;
