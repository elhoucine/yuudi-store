// import { Session } from 'meteor/session';
// import { Session } from 'meteor/u2622:persistent-session';
import Carts from '/imports/api/carts/carts.js';

Template.shoppingCartBox.helpers({
  cartItems() {
    // Anonymous
    if(!Meteor.userId()){
      var userCart = Session.get("userCart");
      return showItems(userCart)
    }

    // Connected
    var userCart = Carts.findOne();
    showItems(userCart);

    function showItems() {
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
    }
  },
  itemsCount(){
    // Connected
    var userCart = Carts.findOne();
    // or anonymous
    if(!Meteor.userId()){
      userCart = Session.get("userCart");
    }
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
});

Template.shoppingCartBox.events({
  'click .remove': (event)=> {
    const itemRef = event.target.id.substr(1);

    // Anonymous
    if(!Meteor.userId()){
      var userCart = Session.get("userCart");
      var position = userCart.items.map(function(elm) { return elm.ref }).indexOf(itemRef);
      var deleted = userCart.items.splice(position, 1);
      Session.setPersistent("userCart", userCart);
      return;
    }

    // Connected user
    Meteor.call('removeFromCart', itemRef, function(err, res){
      console.log('err', err);
      console.log('res', res);
    })
  }
})
