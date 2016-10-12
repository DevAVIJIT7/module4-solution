(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);


ItemController.$inject = ['items'];
function ItemController(items) {
  var itemDetail = this;
  itemDetail.items = items;
}

})();
