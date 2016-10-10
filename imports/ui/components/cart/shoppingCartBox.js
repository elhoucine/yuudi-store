import Carts from '/imports/api/carts/carts.js';

Template.shoppingCartBox.helpers({
  cartItems() {
    return Carts.find().fetch();
  },
  itemsCount(){
    return Carts.find().count();
  },
  totalCartAmount() {
    // TODO: Calculate the total amount
    return 0;
  },
  cartIsNotEmpty() {
    return !!Carts.find().count();
  }
});
