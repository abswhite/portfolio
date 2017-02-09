'use strict'

var projects = [];

function Projects (props) {
  this.title = props.title;
  this.description = props.description;
  this.imgUrl = props.imgUrl;
  this.repoUrl = props.repoUrl;
  this.siteUrl = props.siteUrl;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('section.projects').clone();
  $newProject.removeClass('projects');
}

console.log(Projects());
