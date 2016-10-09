import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/mainLayout.html';
import '../../ui/components/header.html';
import '../../ui/components/header.js';
import '../../ui/components/footer.html';

import '../../ui/components/packs/packs.html';
import '../../ui/components/packs/packs.js';
import '../../ui/components/products/products.html';
import '../../ui/components/products/products.js';

import '../../ui/components/userAuth/auth.html';
import '../../ui/components/main.html';

// The route definitions
FlowRouter.route('/', {
    subscriptions: function(params, queryParams) {
        if(Meteor.isClient) {
          this.register('data', Meteor.subscribe('allPacks'));
          this.register('data', Meteor.subscribe('allProducts'));
          //TODO: Subscribe to connected the user cart
        }
    },
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "main", footer:"footer"});
    }
});

FlowRouter.route('/auth', {
    action: function(params, queryParams) {
        console.log("Hello auth");
        BlazeLayout.render("mainLayout", {top: "header", main: "authentification", footer:"footer"});
    }
});
