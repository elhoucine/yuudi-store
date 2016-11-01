import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Prospects = new Meteor.Collection("prospects");

const prospectsSchema = new SimpleSchema({
  email: {
      type:String,
      regEx: SimpleSchema.RegEx.Email,
      optional:true
  },
})

Prospects.attachSchema(prospectsSchema);
export default Prospects;
