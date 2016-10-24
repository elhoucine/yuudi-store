Template.checkout.rendered = function() {
  $("#step1 a").toggleClass("inStep");
  $("#step2 a").toggleClass("inStep");
}

Template.checkout.helpers({
  stepOne() {
    return false;
  },
  stepTwo() {
    return true;
  },
  stepThree() {
    return false;
  }
});

Template.checkout.events({

});
