'use strict';

console.log('routes.js loaded');

page('/', homeController.init);
page('/projects', projectsController.init);
page('/about', aboutController.init);

page();
