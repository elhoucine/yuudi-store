import Packs from '/imports/api/packs/packs.js';
import './pack.html';

Template.packs.helpers({
  packs() {
    return Packs.find({});
  }
})
