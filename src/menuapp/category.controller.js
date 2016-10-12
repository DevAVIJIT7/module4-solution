(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['MenuDataService', 'categories'];
function CategoryController(MenuDataService, categories) {
  var category = this;
  category.categories = categories;
}

})();
