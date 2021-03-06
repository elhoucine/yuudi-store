import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/mainLayout.html';
import '../../ui/layouts/mainLayout.js';

import '../../ui/components/cart/shoppingCartItem.html';
import '../../ui/components/cart/shoppingCartBox.html';
import '../../ui/components/cart/shoppingCartBox.js';

import '../../ui/components/checkout/checkout.html';
import '../../ui/components/checkout/checkout.js';

import '../../ui/components/cart/myCartFull.html';
import '../../ui/components/cart/myCartFull.js';

import '../../ui/components/header.html';
import '../../ui/components/header.js';
import '../../ui/components/footer.html';
import '../../ui/components/helpers.js';

import '../../ui/components/packs/packs.html';
import '../../ui/components/packs/packs.js';
import '../../ui/components/products/products.html';

import '../../ui/components/products/products.js';
import '../../ui/components/detail/detail.html';

import '../../ui/components/detail/detail.js';

import '../../ui/components/userAuth/connexion.html';
import '../../ui/components/userAuth/auth.html';
import '../../ui/components/main.html';

import  '../../ui/pages/contact/contact.html';
import  '../../ui/pages/contact/contact.js';

import  '../../ui/pages/about/about.html';
import  '../../ui/pages/about/about.js';

//landing pages
import '../../ui/layouts/landingPage.html';
import '../../ui/layouts/landingPage.js';

// Manage order
import '../../ui/components/manage/orders/manageOrders.html';
import '../../ui/components/manage/orders/manageOrders.js';
import '../../ui/components/manage/orders/order-detail.html';
import '../../ui/components/manage/orders/order-detail.js';

// Subscriptions
FlowRouter.subscriptions = function() {
  this.register('data', Meteor.subscribe('allPacks'));
  this.register('data', Meteor.subscribe('allProducts'));
  if(Meteor.userId()) {
    this.register('data', Meteor.subscribe('myCart', Meteor.userId()));
  }
};

// The route definitions
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "main", footer:"footer"});
    }
});

// The route definitions
FlowRouter.route('/landing', {
    action: function(params, queryParams) {
        BlazeLayout.render("landingPage");
    }
});

FlowRouter.route('/checkout', {
    action: function(params, queryParams) {
      // Login or create account before checkout.
      if(!Meteor.userId()){
        Session.set("loginForCheckout", true);
        FlowRouter.go('/connexion');
      }
      BlazeLayout.render("mainLayout", {top: "header", main: "checkout", footer:"footer"});
    }
});

FlowRouter.route('/connexion', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "authentification", footer:"footer"});
    }
});

FlowRouter.route('/detail/:id', {
    action: function (params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "detail", footer:"footer"});
    }
});

FlowRouter.route('/panier', {
    action: function (params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "myCartFull", footer:"footer"});
    }
});

FlowRouter.route('/contact', {
    action: function (params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "contact", footer:"footer"});
    }
});

FlowRouter.route('/yuudi', {
    action: function (params, queryParams) {
        BlazeLayout.render("mainLayout", {top: "header", main: "about", footer:"footer"});
    }
});

/**
* Admin Routes
* Grouped.
**/
var adminRoutes = FlowRouter.group({
  prefix: "/manage",
  name: "admin",
  triggersEnter: [function(context, redirect) {
    // TODO: improve checking for permission to access.
  }]
});

adminRoutes.route('/orders', {
  subscriptions: function(params, queryParams) {
    this.register('data', Meteor.subscribe('allOrders'));
  },
  action: function (params, queryParams) {
      BlazeLayout.render("mainLayout", {top: "header", main: "manageOrders", footer:"footer"});
  }
});

adminRoutes.route('/orders/:id', {
  subscriptions: function(params, queryParams) {
    this.register('data', Meteor.subscribe('orderDetail', params.id));
  },
  action: function (params, queryParams) {
      BlazeLayout.render("mainLayout", {top: "header", main: "orderDetail", footer:"footer"});
  }
});
