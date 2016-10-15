import superfish from 'superfish';

Template.header.rendered = function() {
  $('ul.sf-menu').superfish({
    delay:       300,
    animation:   {opacity:'show'},
    animationOut: {opacity: 'hide'},
    speed:       'fast',
    disableHI:   false,
    cssArrows:   true,
    autoArrows:  true
  });
}

Template.header.events({
  
})
