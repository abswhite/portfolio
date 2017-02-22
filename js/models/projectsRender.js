'use strict';
(function(module) {
//Refactor code below in order to make server-side routes, in addition to the client-side routes
  // $(window).on('hashchange', function(){
  //   console.log('Hash changed: ' + location.hash);
  //   var hash = window.location.hash.substring(1)
  //   $('.page').hide();
  //   $('#'+ hash).show();
  // });

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
    projectsData.forEach(function(ele) {
      Projects.all.push(new Projects(ele));
    });
  }

  Projects.allTitles = () => {
    return Projects.all.map(function(el){
      return el.title.split(' ').length;
    })
    .reduce(function(all, current) {
      return all + current;
    })
  };

  projectView.projectsRender = function() {
    console.log('render function called');
    Projects.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
  };

  Projects.fetchAll = function(callback) {
    if (localStorage.projectsData) {
      Projects.loadAll(JSON.parse(localStorage.projectsData));
      projectView.projectsRender();
      console.log('fetchall 2')
    } else {
      $.getJSON('/data/projectsJSON.json')
      .then(function(projectsData) {
        Projects.loadAll(projectsData);
        localStorage.setItem('projectsData', JSON.stringify(projectsData));
        projectView.projectsRender();
        console.log('fetchall 2');
      })
      .then(function() {
        if (callback)
          callback();
      })
    }
    //Refactor to use .reduce() and .map() in a more meaningful way
    Projects.allTitles();
    $('#projectTitle').append(Projects.allTitles());
  };

  // projectView.initIndexPage = function() {
  //   Projects.fetchAll();
  //   Projects.allTitles();
  // };

  module.Projects = Projects;
}) (window);
