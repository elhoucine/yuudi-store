Template.checkout.rendered = function() {
  // $("#step1 a").toggleClass("inStep");
  // $("#step3 a").toggleClass("inStep");
}

Template.checkout.helpers({
  stepOne() {
    return true;
  },
  stepTwo() {
    return false;
  },
  stepThree() {
    return false;
  }
});

Template.checkout.events({
  'submit #step1-form': function(event) {
    event.preventDefault();
    console.log("form submitted");
    const fullName = event.target.billing_full_name.value;
    const city = event.target.billing_city.value;
    const address = event.target.billing_address_1.value;
    const phone = event.target.billing_phone.value;

    Meteor.call("addProfile", fullName, address, phone, function(err, res) {
      if(err){
        console.log(err);
      }else {
        console.log(res);
      }
    });
  }
});
