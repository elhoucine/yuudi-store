Meteor.methods({
  addProfile(fullName, address, phoneNumber) {
    check(fullName, String);
    check(address, String);
    check(phoneNumber, String);

    return;
  }
});
