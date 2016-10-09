import Packs from '../packs.js';

Meteor.publish('allPacks', function() {
  return Packs.find({published: true});
});
