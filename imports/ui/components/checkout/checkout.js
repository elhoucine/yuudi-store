Template.checkout.rendered = function() {
  // $("#step1 a").toggleClass("inStep");
  // $("#step3 a").toggleClass("inStep");
  console.log(this);
}

Template.checkout.created = function() {
  Session.set("steps", "step1");
}

Template.checkout.helpers({
  stepOne() {
    return Session.equals("steps", "step1");
  },
  stepTwo() {
    return Session.equals("steps", "step2");
  },
  stepThree() {
    return Session.equals("steps", "step3");
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
        $("#step1-form").fadeOut(500);
        $("#step2 a").toggleClass("inStep");
        $("#step2-form").fadeIn(500);
        Session.set("steps", "step2");
      }
    });
  },
  'click #place_order2': function(event) {
    console.log("step2 go");
    $("#step2-form").fadeOut(500);
    $("#step3 a").toggleClass("inStep");
    $("#step3-form").fadeIn(500);
    Session.set("steps", "step3");
  },
  'click #place_order3': function(event) {
    console.log("Confirmed");
  }
});
