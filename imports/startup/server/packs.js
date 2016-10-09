import Packs from '../../api/packs/packs.js';

if (Packs.find().count() < 1) {
  Packs.insert({published: true, name:"Pack", details: "Lid est laborum dolo rumes fugats untras.", photoBig: "/images/pack.jpg", photoSmall: "banner_01.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "Lid est laborum dolo rumes fugats untras.", photoBig: "/images/pack.jpg", photoSmall: "banner_01.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "Lid est laborum dolo rumes fugats untras.", photoBig: "/images/pack.jpg", photoSmall: "banner_03.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "Lid est laborum dolo rumes fugats untras.", photoBig: "/images/pack.jpg", photoSmall: "banner_01.jpg", price:10, promotion:8.99});
}
