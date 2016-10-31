import { Roles } from 'meteor/alanning:roles';

const admin = Meteor.users.findOne({'emails.address': "demo@demo.com" });
if(admin.roles && (admin.roles !== "admin")){
    Roles.addUsersToRoles(admin._id, 'admin');
}
