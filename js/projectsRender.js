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

  var source = $('.template').html();
  // var templateRender = Handlebars.compile(source);
  // return templateRender(this);

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
  var hash = window.location.hash.substring(1);
  $('section').hide();
  $('#'+hash).show();
  $('#site-subheading').hide();
});


// function navigation() {
//   $('main').eq(0).show();
//   $('#home').on('click', 'a', function() {
//     $($(this).attr('href')).show().siblings('section:visible').hide();
//   });
// }
// navigation();
