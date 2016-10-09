import Products from '../products.js';

Meteor.publish('allProducts', function() {
  return Products.find({published: true});
});
