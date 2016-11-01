import Orders from '/imports/api/orders/orders.js';

Template.manageOrders.helpers({
  activeOrders() {
    return Orders.find({"status": "created"});
  },
  ShippedOrders() {
    return Orders.find({"status": "shipped"});
  }
});
