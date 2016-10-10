import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Products = new Meteor.Collection('products');

productsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  details: {
    type: String,
  },
  photoBig: {
    type: String
  },
  photoSmall:{
    type: String
  },
  price: {
    type: Number,
    decimal: true,
  },
  promotion: {
    type: Number,
    decimal: true,
  },
  created: {
      type: Date,
      autoValue: function () {
          if (this.isInsert) {
              return new Date();
          } else {
              this.unset();
          }
      }
  },
  modified: {
      type: Date,
      autoValue: function () {
          return new Date();
      }
  },
});

export default Products;
