'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {'Authorization': `token ${githubToken}`}
    })
    .then(data => repos.all = data,
      err => console.error(err))
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  console.log(repos.all);

  module.repos = repos;
})(window);
