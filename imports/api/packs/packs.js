import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Packs = new Meteor.Collection('packs');

const packsSchema = new SimpleSchema({
  published: {
    type: Boolean,
  },
  name: {
    type: String,
    label: "Pack name",
    max: 200
  },
  details: {
    type: String,
  },
  photoCover:{
    type: String,
  },
  photos:{
    type: [String]
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
})

Packs.attachSchema(packsSchema);
export default Packs;
