import { Roles } from 'meteor/alanning:roles';
import Orders from '../orders.js';

Meteor.publish('allMyOrders', function() {
  return Orders.find({'userId': this.userId});
});

Meteor.publish('allOrders', function() {
  if(Roles.userIsInRole(this.userId, "admin")){
    return Orders.find({});
  }
  this.ready();
});
