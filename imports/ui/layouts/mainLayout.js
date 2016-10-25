import Carts from '/imports/api/carts/carts.js';

Template.mainLayout.onCreated( function () {
  this.documents = this.subscribe('allPacks', function() {
    $(".preloader").fadeOut("slow").delay(200, function(){});
  });
})

Template.mainLayout.helpers({
  itemsCount(){
    // Connected
    var userCart = Carts.findOne();
    // or anonymous
    if(!Meteor.userId()){
      userCart = Session.get("userCart");
    }
    if (userCart){
      Session.set("cartIsNotEmpty", !!userCart.items.length);
      return userCart.items.length || 0;
    }
  }
});

Template.mainLayout.rendered=function () {
  $(window).scroll(function() {
     if ($(window).scrollTop() >= 190) {
       $("div.cartPopUp").fadeIn();
     }else {
       $("div.cartPopUp").fadeOut();
     }
  });

  $("div.cartPopUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow",function () {
        $(".shopping-cart").addClass("open");
    });
  })
}
