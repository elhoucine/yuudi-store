import Packs from '../../api/packs/packs.js';

if (Packs.find().count() < 1) {
  Packs.insert({published: true, name:"Pack Basic", details: "Lorem ipsum dolor sit amet.", photoBig: "/images/banners/banner_01.jpg", photoSmall: "/images/banners/banner_01.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack Fruits", details: "Lorem ipsum dolor sit amet.", photoBig: "/images/banners/banner_02.jpg", photoSmall: "http://cdn.24.co.za/files/Cms/General/d/2299/d5b27474d5634d05a37e42ead808aa60.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack Kids", details: "Lorem ipsum dolor sit amet.", photoBig: "/images/banners/banner_03.jpg", photoSmall: "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps9730_QC10024C27C.jpg", price:10, promotion:8.99});
  Packs.insert({published: true, name:"Pack Toilet", details: "Lorem ipsum dolor sit amet.", photoBig: "/images/banners/banner_04.jpg", photoSmall: "https://az677858.vo.msecnd.net/categories/fixed-shower-heads-with-arms-category.jpg?w=300&h=300&mode=crop&scale=downscaleonly&bgcolor=", price:10, promotion:8.99});
}
