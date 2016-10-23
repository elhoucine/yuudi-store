Template.mainLayout.onCreated( function () {
  this.documents = this.subscribe('allPacks', function() {
    $(".preloader").fadeOut("slow").delay(200, function(){});
  });
})

Template.mainLayout.helpers({
});
