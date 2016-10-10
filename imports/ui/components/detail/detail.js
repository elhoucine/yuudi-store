import Packs from '/imports/api/packs/packs.js';
import Products from '/imports/api/products/products.js';
import './detail.html';

Template.detail.rendered=function () {

}

Template.detail.helpers({
  detail() {
    var id = FlowRouter.getParam("id");
    var query = FlowRouter.getQueryParam("detail");
    if(query == "pack"){
        return Packs.findOne({"_id":id});
    }else if(query == "produit"){
        return Products.findOne({"_id":id});
    }
  }
})
