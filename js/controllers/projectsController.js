'use strict';

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    console.log('projects controller running');
    // Projects.fetchAll(projectView.initIndexPage);
    $('#projects').show();
    $('#home').hide();
    $('#about').hide();
    $('#contact').hide();
    repos.requestRepos(repoView.index);

  };

  module.projectsController = projectsController;
})(window);
