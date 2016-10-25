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
    return showItems(userCart);

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
        return sum;
      }
    }

    return 0;
  },
  cartIsNotEmpty() {
    return Session.get("cartIsNotEmpty");
  },
});

Template.shoppingCartBox.events({
  'click .remove': (event)=> {
    event.preventDefault();
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
