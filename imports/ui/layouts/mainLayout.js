Template.mainLayout.onCreated( function () {
  this.documents = this.subscribe('allPacks');
})

Template.mainLayout.helpers({
  packsReady: function() {
    return Template.instance().documents.ready();
  }
})
