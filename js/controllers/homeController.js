'use strict';

(function(module) {
  const homeController = {};

  homeController.init = function() {
    console.log('home controller running');
    $('#main').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(window);
