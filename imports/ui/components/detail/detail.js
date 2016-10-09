import Packs from '/imports/api/packs/packs.js';
import './detail.html';

Template.detail.rendered=function () {

}

Template.detail.helpers({
  detail() {
    var id = FlowRouter.getParam("id");
    return Packs.findOne({"_id":id});
  }
})
