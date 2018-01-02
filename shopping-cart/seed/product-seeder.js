var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');


var products = [
    new Product ({
        imagePath: '/images/BoostYS-web-energy.jpg',
        title: 'BY Energy superfood blend',
        description: 'A Superfood blend for smoothies',
        price: 22
    }),
    new Product ({
        imagePath: '/images/BoostYS-web-energy.jpg',
        title: 'BY Energy superfood blend',
        description: 'A Superfood blend for smoothies',
        price: 22
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

