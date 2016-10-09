import Products from '/imports/api/products/products.js';
import './product.html';

Template.products.helpers({
  products() {
    return Products.find({});
  }
})
