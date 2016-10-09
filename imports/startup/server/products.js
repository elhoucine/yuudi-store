import Products from '../../api/products/products.js';

if( Products.find().count() < 1){
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit.jpg", photoSmall: "/images/produit.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit1.jpg", photoSmall: "/images/produit1.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit2.jpg", photoSmall: "/images/produit2.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit3.jpg", photoSmall: "/images/produit3.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit4.jpg", photoSmall: "/images/produit4.jpg", price:10, promotion:8.99});

  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit.jpg", photoSmall: "/images/produit.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit1.jpg", photoSmall: "/images/produit1.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit2.jpg", photoSmall: "/images/produit2.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit3.jpg", photoSmall: "/images/produit3.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit4.jpg", photoSmall: "/images/produit4.jpg", price:10, promotion:8.99});

  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit.jpg", photoSmall: "/images/produit.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit1.jpg", photoSmall: "/images/produit1.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit2.jpg", photoSmall: "/images/produit2.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit3.jpg", photoSmall: "/images/produit3.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit4.jpg", photoSmall: "/images/produit4.jpg", price:10, promotion:8.99});

  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit.jpg", photoSmall: "/images/produit.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit1.jpg", photoSmall: "/images/produit1.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit2.jpg", photoSmall: "/images/produit2.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit3.jpg", photoSmall: "/images/produit3.jpg", price:10, promotion:8.99});
  Products.insert({published: true, name:"Product", details: "lorem", photoBig: "/images/produit4.jpg", photoSmall: "/images/produit4.jpg", price:10, promotion:8.99});
}
