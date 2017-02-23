'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('github/user/repos')
    .then(data => repos.all = data,
      err => console.error(err))
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  console.log(repos.all);

  module.repos = repos;
})(window);
