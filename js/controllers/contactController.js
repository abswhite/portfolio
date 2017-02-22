'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function() {
    console.log('contact controller running');
    $('#contact').show();
    $('#home').hide();
    $('#about').hide();
    $('#projects').hide();

  };

  module.contactController = contactController;
})(window);
