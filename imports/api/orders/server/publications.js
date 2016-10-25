import Orders from '../orders.js';

Meteor.publish('allMyOrders', function() {
  return Orders.find({'userId': this.userId});
});
