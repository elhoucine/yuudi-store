import Products from '/imports/api/products/products.js';
import './product.html';

Template.products.helpers({
  products() {
    return Products.find({});
  }
})

Template.products.events({
  'click .addToCart': (event) => {
    const itemId = event.target.id;
    const item = Products.find(itemId).fetch()[0];
    Meteor.call('addToCart', item, function(err, res) {
      if(err) {
        console.log(err);
      }
      else{
        console.log(res);
      }
    });
  }
});
