Template.landingPage.events({
  "submit #landing_form": function(event) {
    event.preventDefault();
    var email = event.target["email_landing"].value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      // TODO: Show error
    };

    // Save email
    var res = writeUserData(email);
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
    console.log(database);
  }, 1000);
}

// Save to db;
function writeUserData(email) {
  firebase.database().ref('emails/').push(email);
}
