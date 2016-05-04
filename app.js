(function() {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', [ '$http', function($http) {
    var store = this;

    store.products = [];

    $http.get('products.json').success(function(data) {
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  // var gems = [
  //   {
  //     name: 'Dodecahedron',
  //     price: 2.95,
  //     description: 'It\'s got 12 sides, so there are some applications.',
  //     canPurchase: true,
  //     image: "images/gem1.jpg",
  //     reviews: [
  //       {
  //         stars: 3,
  //         body: "it's ok, I guess",
  //         author: "kek@lord.lel"
  //       },
  //     ]
  //   },
  //   {
  //     name: 'Pentagonal Gem',
  //     price: 5.95,
  //     description: 'One more angle than a square gem.',
  //     canPurchase: false,
  //     image:"images/gem2.jpg",
  //     reviews: [
  //       {
  //         stars: 4,
  //         body: "Met my expectations, although it could use another side.",
  //         author: "wew@top.pip"
  //       },
  //       {
  //         stars: 1,
  //         body: "dumb",
  //         author: "anonymouse@sup.fam"
  //       }
  //     ]
  //   }
  // ];
})();
