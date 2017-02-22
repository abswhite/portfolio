'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    console.log('about controller running');
    $('#about').show();
    $('#home').hide();
    $('#projects').hide();
    $('#contact').hide();
  };

  module.aboutController = aboutController;
})(window);
