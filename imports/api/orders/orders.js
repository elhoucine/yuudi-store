import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Orders = new Meteor.Collection('orders');

const productSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Pack name",
    max: 200
  },
  photoCover:{
    type: String,
  },
  price: {
    type: Number,
    decimal: true,
  },
  promotion: {
    type: Number,
    decimal: true,
  },
});

const itemSchema = new SimpleSchema({
  ref: {
    type: SimpleSchema.RegEx.ObjectId
  },
  item: {
    type: productSchema
  },
  quantity: {
    type: Number
  }
});

const OrdersSchema = new SimpleSchema({
  userId: {
    type: SimpleSchema.RegEx.ObjectId
  },
  items: {
    type: [itemSchema],
    optional: true
  },
  status: {
    type: String
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

Orders.attachSchema(OrdersSchema);
export default Orders;
