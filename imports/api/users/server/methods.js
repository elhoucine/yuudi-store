import { check } from 'meteor/check';

Meteor.methods({
  addProfile(fullName, address, phoneNumber) {
    check(fullName, String);
    check(address, String);
    check(phoneNumber, String);

    // Check the user is logged-in
    if(!this.userId){
      throw new Meteor.Error('Not authorized');
    }

    var profile = {
      "fullName": fullName,
      "address": address,
      "phoneNumber": phoneNumber,
    }

    return Meteor.users.update(this.userId, {"$set": {"profile": profile}});
  }
});
