import Products from '/imports/api/products/products.js';
import './product.html';

Template.products.onCreated( function () {
  this.documents = this.subscribe('allProducts');
})

Template.products.helpers({
  packsReady: function() {
    return Template.instance().documents.ready();
  },
  products() {
    return Products.find({});
  }
})

Template.products.events({
  'click .addToCart': (event) => {
    const itemId = event.target.id;
    const item = Products.find(itemId).fetch()[0];
    if(Meteor.userId()){
      Meteor.call('addToCart', item, function(err, res) {
        if(err) {
          console.log(err);
        }
        else{
          console.log(res);
        }
      });
    }else {
      addToCartAnonymous(item);
    }
  }
});


addToCartAnonymous = function(item, quantity=1) {
  // Check the user is Anonymous
  if(Meteor.userId()) {
    return;
  }
  //A user should always have a cart.
  var userCart = Session.get("userCart") || {items: []};
  if(!userCart){
    Session.setPersistent("userCart", userCart);
  }

  // TODO: Check the product/pack exists

  // Check for duplication & Increment quantity
  var duplication = _.find(userCart.items, function(elm) {
    if(elm.ref === item._id){
      if(elm.quantity > 9){
        return true;
      }
      elm.quantity++;
      return true;
    }
  });

  if(!duplication) {
    userCart.items.push({ref: item._id, item: item, quantity: quantity});
  }

  //Save cart
  Session.setPersistent("userCart", userCart);
}
