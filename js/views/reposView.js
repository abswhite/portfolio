'use strict';
console.log('inside repos VIEW page');
(function(module) {
  const repoView = {};

  const projEmpty = function() {
    let $projects = $('#projects');
    console.log('inside repos VIEW ui function');

    $projects.find('ul').empty();
    $projects.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    projEmpty();
    $('#projects ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
