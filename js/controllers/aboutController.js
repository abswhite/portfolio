'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    console.log('about controller running');
    $('#main').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
