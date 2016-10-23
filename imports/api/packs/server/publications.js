import Packs from '../packs.js';

Meteor.publish('allPacks', function() {
  Meteor._sleepForMs(500);
  return Packs.find({published: true});
});
