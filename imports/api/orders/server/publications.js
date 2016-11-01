import { Roles } from 'meteor/alanning:roles';
import Orders from '../orders.js';

Meteor.publish('allMyOrders', function() {
  return Orders.find({'userId': this.userId});
});

/**
* Specific to Admin
*
**/
Meteor.publish('allOrders', function() {
  if(Roles.userIsInRole(this.userId, "admin")){
    return Orders.find({});
  }
  this.ready();
});

Meteor.publish('orderDetail', function(orderId) {
  if(Roles.userIsInRole(this.userId, "admin")){
    return Orders.find({'_id': orderId});
  }
  this.ready();
});
