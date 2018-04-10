var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/shopping');
mongoose.connect('mongodb://localhost/shopping');


var products = [
  new Product({
    imagePath:'http://igg-games.com/wp-content/uploads/2015/12/Gothic-1-Free-Download.jpg',
    title:'Gothic Video Game',
    description:'Awesome Game!!!',
    price: 10
  }),
  new Product({
    imagePath:'http://darksouls3.wikidot.com/local--files/system:_picture-right/Dark_souls_3_cover_art.jpg',
    title:'Dark Souls Video Game',
    description:'I died!',
    price: 50
  }),
  new Product({
    imagePath:'http://www.dreadcentral.com/wp-content/uploads/2014/09/bloodborne.jpg',
    title:'Bloodborne Video Game',
    description:'This is crazy!',
    price: 30
  }),
  new Product({
    imagePath:'https://static-ca.ebgames.ca/images/products/715928/3max.jpg',
    title:'Minecraft Video Game',
    description:'Now that is awesome!',
    price: 15
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Fortnite_cover_art%28PC%29.jpg/220px-Fortnite_cover_art%28PC%29.jpg',
    title:'Fortnite Video Game',
    description:'That is the best!',
    price: 20
  }),
  new Product({
    imagePath:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5925/5925210_sd.jpg;maxHeight=550;maxWidth=642',
    title:'PES 2018 Video Game',
    description:'Pro evolution Soccer!',
    price: 45
  })
];
var done = 0;
for (var i=0; i<products.length; i++){
  products[i].save(function(err, result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
