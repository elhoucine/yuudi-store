Template.landingPage.helpers({
  feedback() {
    return Session.get("landginFormFeedback") || "Je veux être informé!";
  },
  success() {
    return Session.get("success");
  }
});

Template.landingPage.events({
  "submit #landing_form": function(event) {
    event.preventDefault();
    var email = event.target["email_landing"].value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      // TODO: Show error
      Session.set("landginFormFeedback", "Veuillez entrer une adress mail valide.");
      Meteor.setTimeout(function () {
        Session.set("landginFormFeedback", "Je veux être informé!");
      }, 1500);
      // return;
    };

    // Save email
    var res = writeUserData(email);

    Meteor.call("addProspect", email, function(err, res) {
      if(err){
        Session.set("landginFormFeedback", err.error);
        Meteor.setTimeout(function () {
          Session.set("landginFormFeedback", "Je veux être informé!");
        }, 1500);
        return;
      }
      Session.set("landginFormFeedback", "Merci!");
      $("#email_landing").hide("slow");
      window.location.href = '#success';
      Session.set("success", true);
    });
  }
});

Template.landingPage.rendered = function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkaYFJ1EYfZs4xOdEBIDxVG7IL1yI7BVc",
    authDomain: "yuudi-landing.firebaseapp.com",
    databaseURL: "https://yuudi-landing.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "72609404159"
  };
  setTimeout(function () {
    firebase.initializeApp(config);
    var database = firebase.database();
  }, 1500);
}

// Save to db;
function writeUserData(email) {
  if(firebase){
    firebase.database().ref('emails/').push(email);
  }
}
