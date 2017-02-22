'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function() {
    console.log('contact controller running');
    // Projects.fetchAll(projectView.initIndexPage);
    $('#main').hide();
    $('#contact').show();
  }

  module.contactController = contactController;
})(window);
