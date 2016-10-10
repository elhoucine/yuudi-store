import { Meteor } from 'meteor/meteor';

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import '../imports/startup/server/products.js';
import '../imports/startup/server/packs.js';

// This file configures the Accounts package to define the UI of the reset password email.
// import '../imports/startup/server/reset-password-email.js';

// Set up some rate limiting and other important security settings.
// import '../imports/startup/server/security.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '../imports/api/packs/packs.js';
import '../imports/api/packs/server/publications.js';
import '../imports/api/packs/server/methods.js';

import '../imports/api/users/users.js';

// Carts
import '../imports/api/carts/carts.js';
import '../imports/api/carts/server/publications.js';
import '../imports/api/carts/server/methods.js';


import '../imports/api/products/products.js';
import '../imports/api/products/server/publications.js';
import '../imports/api/products/server/methods.js';
