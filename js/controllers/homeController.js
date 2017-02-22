'use strict';

(function(module) {
  const homeController = {};

  homeController.init = function() {
    console.log('home controller running');
    $('#home').show();
    $('#about').hide();
    $('#projects').hide();
    $('#contact').hide();
  };

  module.homeController = homeController;
})(window);
