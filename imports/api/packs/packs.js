import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Packs = new Meteor.Collection('packs');

packsSchema = new SimpleSchema({
  published: {
    type: Boolean,
  },
  name: {
    type: String,
    label: "Product name",
    max: 200
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
  },
  promotion: {
    type: Number,
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
})

export default Packs;
