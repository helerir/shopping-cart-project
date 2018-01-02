var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/BoostYS-web-balance.jpg',
        title: 'Balance superfood blend',
        description: 'A superfood blend made for smoothies',
        price: 21.90
    }),
    new Product({
        imagePath: '/images/BoostYS-web-energy.jpg',
        title: 'Energy superfood blend',
        description: 'A superfood blend made for smoothies',
        price: 23.90
    }),
    new Product({
        imagePath: '/images/BoostYS-web-choco.jpg',
        title: 'Choco superfood blend',
        description: 'A superfood blend made for smoothies',
        price: 18.90
    }),
    new Product({
        imagePath: '/images/BoostYS-web-detox.jpg',
        title: 'Detox superfood blend',
        description: 'A superfood blend made for smoothies',
        price: 21.90
    }),
    new Product({
        imagePath: '/images/BoostYS-web-berry.jpg',
        title: 'Berry superfood blend',
        description: 'A superfood blend made for smoothies',
        price: 22.90
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