import Carts from '/imports/api/carts/carts.js';

Template.shoppingCartBox.helpers({
  cartItems() {
    const userCart = Carts.findOne();
    if (userCart) {
      const items = userCart.items;
      let l = items.length;
      return [userCart.items[l-1], userCart.items[l-2], userCart.items[l-3]];
    }
  },
  itemsCount(){
    const userCart = Carts.findOne();
    if (userCart){
      return userCart.items.length;
    }
  },
  totalCartAmount() {
    // TODO: Calculate the total amount
    return 0;
  },
  cartIsNotEmpty() {
    return !!Carts.find().count();
  },
  _userCart() {
    return Carts.findOne();
  }
});

Template.shoppingCartBox.events({
  'click .remove': (event)=> {
    const itemRef = event.target.id;
    Meteor.call('removeFromCart', function(err, res){
      console.log('err', err);
      console.log('res', res);
    })
  }
})
