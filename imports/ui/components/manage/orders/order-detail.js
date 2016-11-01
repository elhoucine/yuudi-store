import Orders from '/imports/api/orders/orders.js';

Template.orderDetail.redered = function(){
  console.log("hello just got rendered");
}

Template.orderDetail.helpers({
  cartItems() {
    // Connected
    console.log("Hello cartItems");
    var userCart = Orders.findOne();
    return showItems(userCart);

    function showItems() {
      if (userCart && userCart.items) {
        const items = userCart.items;
        return items;
      }
    }
  },
  /*----------*/
  totalItemsQuantity(itemPrice, quantity){
    return itemPrice * quantity;
  },
  /*----------*/
  cartSubtotal() {
    // Connected
    const userCart = Orders.findOne();
    return calculateTotalPrice(userCart);

    function calculateTotalPrice(userCart){
      if (userCart && userCart.items) {
        const items = userCart.items;
        var sum = _.reduce(items, function(memo, elm){return memo + (elm.item.price*elm.quantity)}, 0);
        Session.set('cartSubtotal', sum);
        return sum;
      }
    }
  },
  /*----------*/
  totalCart() {
    const shipping = 0;
    const packaging = 0;
    var totalUtilities = shipping + packaging;
    var total = Session.get('cartSubtotal') + totalUtilities;
    return total;
  },
  /*----------*/
  disableIncrement(quantity) {
    return quantity === 10;
  },
  /*----------*/
  disableDecrement(quantity) {
    return quantity === 1;
  }
});
