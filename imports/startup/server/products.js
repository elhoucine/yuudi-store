import Products from '../../api/products/products.js';

if( Products.find().count() < 10){

  Products.insert({
      published: true,
      name:"Banane local",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/banana_local.jpg",
      photos:["/images/products/banana_local.jpg"],
      price:7.95,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Banane import",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/banana_import.jpg",
      photos:["/images/products/banana_import.jpg"],
      price:15.75,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Abricot",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/apricot.jpg",
      photos:["/images/products/apricot.jpg"],
      price:24.95,
      promotion:8.99
  });

  Products.insert({
      published: true,
      name:"Pomme vert",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/apple.jpg",
      photos:["/images/products/apple.jpg"],
      price:20.95,
      promotion:8.99
    });

  Products.insert({
    published: true,
    name:"Kiwi",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/kiwi.jpg",
    photos:["/images/products/kiwi.jpg"],
    price:18.75,
    promotion:8.99
  });

  Products.insert({
      published: true,
      name:"Pomme rouge",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/red_apples.jpg",
      photos:["/images/products/red_apples.jpg"],
      price:21.95,
      promotion:8.99});

  Products.insert({
      published: true,
      name:"Raisin noir",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/black_grape.jpg",
      photos:["/images/products/black_grape.jpg"],
      price:13.75,
      promotion:8.99
  });

  Products.insert({
      published: true,
      name:"Raisin vert",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photoCover: "/images/products/green_grape.jpg",
      photos:["/images/products/green_grape.jpg"],
      price:12.75,
      promotion:8.99
    });

  Products.insert({
    published: true,
    name:"Grenade",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/pomegranate.jpg",
    photos:["/images/products/pomegranate.jpg"],
    price:6.75,
    promotion:8.99
  });

  Products.insert({
    published: true,
    name:"Ananas",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/Pineapple.jpg",
    photos:["/images/products/Pineapple.jpg"],
    price:21.75,
    promotion:8.99
  });

  Products.insert({
    published: true,
    name:"Poire",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/pear.jpg",
    photos:["/images/products/pear.jpg"],
    price:20.75,
    promotion:8.99
  });

  Products.insert({
    published: true,
    name:"Avocat",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/avocado.jpg",
    photos:["/images/products/avocado.jpg"],
    price:20,
    promotion:8.99
  });

  Products.insert({
    published: true,
    name:"Prune",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photoCover: "/images/products/plum.jpg",
    photos:["/images/products/plum.jpg"],
    price:20,
    promotion:8.99
  });
}
