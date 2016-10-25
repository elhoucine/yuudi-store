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
    console.log(event.target.billing_full_name.value);
    console.log(event.target.billing_city.value);
    console.log(event.target.billing_address_1.value);
    console.log(event.target.billing_phone.value);
  }
});
