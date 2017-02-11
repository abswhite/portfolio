'use strict'

var projectsArray = [];

function Projects (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.imgUrl = opts.imgUrl;
  this.repoUrl = opts.repoUrl;
  this.siteUrl = opts.siteUrl;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('a').html(this.title);
  $newProject.find('h4').html(this.description);
  $newProject.find('img').attr('src',this.imgUrl);
  $newProject.find('a').attr('href', this.siteUrl);

  $newProject.append('<hr>');
  return $newProject;
};

rawProjects.forEach(function(articleObject) {
  projectsArray.push(new Projects(articleObject));
  console.log(projectsArray);
});

projectsArray.forEach(function(a) {
  $('#projects').append(a.toHtml());
});


$(window).on('hashchange', function(){
  var hash = window.location.hash.substring(1); // hash part of url withou the first letter (#)
  $('section').hide();
  $('#'+hash).show();
});
