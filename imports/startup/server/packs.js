import Packs from '../../api/packs/packs.js';

if (Packs.find().count() < 1) {
  Packs.insert({published: true, name:"Pack", details: "lorem", photoBig: "/images/pack.jpg", photoSmall: "/images/pack.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "lorem", photoBig: "/images/pack.jpg", photoSmall: "/images/pack.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "lorem", photoBig: "/images/pack.jpg", photoSmall: "/images/pack.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack", details: "lorem", photoBig: "/images/pack.jpg", photoSmall: "/images/pack.jpg", price:10, promotion:8.99});
}
