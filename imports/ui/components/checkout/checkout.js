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

});
