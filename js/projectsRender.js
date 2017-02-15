'use strict'

$(window).on('hashchange', function(){
  console.log('Hash changed: ' + location.hash);
  var hash = window.location.hash.substring(1)
  $('.page').hide();
  $('#'+ hash).show();
});

let projectView = {};

function Projects (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.imgUrl = opts.imgUrl;
  this.repoUrl = opts.repoUrl;
  this.siteUrl = opts.siteUrl;
}

Projects.all = [];

Projects.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());
  return template(this);
};

Projects.loadAll = function(projectsData) {
  console.log('load All');
  projectsData.forEach(function(ele) {
    Projects.all.push(new Projects(ele));
  });
  console.log(Projects.all);
}

projectView.projectsRender = function() {
  console.log('render function called');
  Projects.all.forEach(function(a) {
    $('#projects').append(a.toHtml());
  });
};


Projects.fetchAll = function() {
  if (localStorage.projectsData) {
    Projects.loadAll(JSON.parse(localStorage.projectsData));
    projectView.projectsRender();
  } else {
    $.getJSON('/public/data/projectsJSON.json')
    .then(function(projectsData) {
      Projects.loadAll(projectsData);
      localStorage.setItem('projectsData', JSON.stringify(projectsData));
      projectView.projectsRender();
      console.log('here in else');
    })
  }
};

  // dataType: 'json',
  // method: 'GET',
  // url: 'data/projectsJSON.json',
  // success: function(data) {
  //   localStorage.setItem('projectsData', JSON.stringify(data));
  //   Projects.loadAll(data);
  //   projectsRender();
  //   console.log('here');

//   var source = $('#article-template').html();
//   var templateRender = Handlebars.compile(source);
//   return templateRender(this);
// };
//
// rawProjects.forEach(function(articleObject) {
//   projectsArray.push(new Projects(articleObject));
// });
//
// projectsArray.forEach(function(a) {
//   $('#projects').append(a.toHtml());
// });
