import { check } from 'meteor/check';
import Prospects from '../prospects.js';

Meteor.methods({
  addProspect(email) {
    check(email, String);

    if(Prospects.findOne({email:email})){
      throw new Meteor.Error("Ooops! Email déjà enregistré.");  
    }

    return Prospects.insert({
      email: email,
    });
  }
});
