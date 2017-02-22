'use strict';

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    console.log('projects controller running');
    // Projects.fetchAll(projectView.initIndexPage);
    $('#main').hide();
    $('#projects').show();
  }

  module.projectsController = projectsController;
})(window);
