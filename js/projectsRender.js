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
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

rawProjects.forEach(function(articleObject) {
  projectsArray.push(new Projects(articleObject));
});

projectsArray.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
//
// $(window).on('hashchange', function(){
//   var hash = window.location.hash.substring(1);
//   $('section').hide();
//   $('#'+hash).show();
//   $('#site-subheading').hide();
// });

// function navigation() {
//   $('main').eq(0).show();
//   $('#home').on('click', 'a', function() {
//     $($(this).attr('href')).show().siblings('section:visible').hide();
//   });
// }
// navigation();
//
// function showPage(pageId) {
//   $('.page').hide();
//   $('#site-subheading').hide();
//   $('pageId').show();
// }
//
$(window).on('hashchange', function(){
  console.log('Hash changed: ' + location.hash);
  var hash = window.location.hash.substring(1)
  $('.page').hide();
  $('#'+ hash).show();
});
