(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'It\'s got 12 sides, so there are some applications',
      canPurchase: true,
      image: "images/gem1.jpg"
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'One more angle than a square gem.',
      canPurchase: false,
      image:"images/gem2.jpg"
    }
  ]
})();
