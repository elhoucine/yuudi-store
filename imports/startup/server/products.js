import Products from '../../api/products/products.js';

if( Products.find().count() < 1){

  Products.insert({
      published: true,
      name:"Lait UHT 1L",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:10,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"La Vache Qui Rit",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit1.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:8,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Thé Sultan",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit2.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:7,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Isabel Thon",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit3.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:18,
      promotion:8.99});


  Products.insert({
      published: true,
      name:"Lait UHT 1L",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:10,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"La Vache Qui Rit",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit1.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:8,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Thé Sultan",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit2.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:7,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Isabel Thon",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit3.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:18,
      promotion:8.99});


  Products.insert({
      published: true,
      name:"Lait UHT 1L",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:10,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"La Vache Qui Rit",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit1.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:8,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Thé Sultan",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit2.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:7,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Isabel Thon",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit3.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:18,
      promotion:8.99});


  Products.insert({
      published: true,
      name:"Lait UHT 1L",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:10,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"La Vache Qui Rit",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit1.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:8,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Thé Sultan",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit2.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:7,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Isabel Thon",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/produit3.jpg",
      photos:["/images/produit.jpg","/images/produit1.jpg","/images/produit2.jpg","/images/produit3.jpg"],
      price:18,
      promotion:8.99});
}
