import Carts from '/imports/api/carts/carts.js';

Template.checkout.rendered = function() {}

Template.checkout.created = function() {
  Session.set("steps", "step1");
}

Template.checkout.helpers({
  cartItems() {
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
  totalItemsQuantity(itemPrice, quantity){
    return itemPrice * quantity;
  },
  cartSubtotal() {
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
        Session.set('cartSubtotal', sum);
        return sum;
      }
    }
  },
  totalCart() {
    const shipping = 0;
    const packaging = 0;
    var totalUtilities = shipping + packaging;
    var total = Session.get('cartSubtotal') + totalUtilities;
    return total;
  },
  stepOne() {
    return Session.equals("steps", "step1");
  },
  stepTwo() {
    return Session.equals("steps", "step2");
  },
  stepThree() {
    return Session.equals("steps", "step3");
  }
});

Template.checkout.events({
  'submit #step1-form': function(event) {
    event.preventDefault();
    const fullName = event.target.billing_full_name.value;
    const city = event.target.billing_city.value;
    const address = event.target.billing_address_1.value;
    const phone = event.target.billing_phone.value;

    Meteor.call("addProfile", fullName, address, phone, function(err, res) {
      if(err){
        console.log(err);
      }else {
        $("#step1-form").fadeOut(500);
        $("#step2 a").toggleClass("inStep");
        $("#step2-form").fadeIn(500);
        Session.set("steps", "step2");
      }
    });
  },
  'click #place_order2': function(event) {
    $("#step2-form").fadeOut(500);
    $("#step3 a").toggleClass("inStep");
    $("#step3-form").fadeIn(500);
    Session.set("steps", "step3");
    Meteor.call("addOrder", function(err, res) {
      if(err){
        console.log(err);
      }
    });
  },
  'click #place_order3': function(event) {
    console.log("Confirmed");
  },
  'click #update_order2': function(event) {
    $("#step2 a").toggleClass("inStep");
    $("#step2-form").fadeOut(500);
    Session.set("steps", "step1");
    $("#step1-form").fadeIn(500);
  }
});
