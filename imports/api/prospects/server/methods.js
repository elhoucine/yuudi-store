import { check } from 'meteor/check';
import { Match } from 'meteor/check';
import Prospects from '../prospects.js';

Meteor.methods({
  addProspect(email) {
    check(email, String);

    if (!IsValidEmail(email)) {
        throw new Meteor.Error("Ooops! Veuillez entrer une adress mail valide.");
    }

    if(Prospects.findOne({email:email})){
      throw new Meteor.Error("Ooops! Email déjà enregistré.");
    }

    return Prospects.insert({
      email: email,
    });
  }
});

var IsValidEmail = function(email) {
    return Match.test(email, ValidEmail);
};

var ValidEmail = Match.Where(function(x) {
    check(x, String);
    return x.length <= 254 && ValidEmail.regex.test(x);
});
ValidEmail.regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
ValidEmail.permissive = /^[^@]+@[^@]+$/;
