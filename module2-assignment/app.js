(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.list = ShoppingListCheckOffService.getToBuyList();

  tobuy.markBought = function (itemIndex) {
    ShoppingListCheckOffService.markBought(itemIndex);
  }
};


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.list = ShoppingListCheckOffService.getBoughtList();
};


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [{"itemName": "cookies", "quantity": 10},{"itemName": "pizza", "quantity": 5},{"itemName": "ice cream", "quantity": 20},{"itemName": "soda", "quantity": 100}];
  var bought = [];

  service.markBought = function(itemIndex){
    bought.push(toBuy[itemIndex]);
    toBuy.splice(itemIndex, 1);
  };


  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };


  service.addItemToBuy = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    tobuy.push(item);
  };


  service.getToBuyList = function () {
    return toBuy;
  };

  service.getBoughtList = function () {
    return bought;
  };
}

})();
