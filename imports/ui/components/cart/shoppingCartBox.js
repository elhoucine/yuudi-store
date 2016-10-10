import Carts from '/imports/api/carts/carts.js';

Template.shoppingCartBox.helpers({
  cartItems() {
    const userCart = Carts.findOne();
    if (userCart) {
      return [userCart.items[0], userCart.items[1], userCart.items[2]];
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
