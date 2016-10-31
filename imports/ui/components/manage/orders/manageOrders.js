import Orders from '/imports/api/orders/orders.js';

Template.manageOrders.helpers({
  activeOrders() {
    console.log(Orders.find({"status": "created"}).fetch());
    return Orders.find({"status": "created"});
  },
  ShippedOrders() {
    return Orders.find({"status": "shipped"});
  }
});
