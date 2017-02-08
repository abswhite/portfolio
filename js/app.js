'use  strict'

function Projects(title, description, img, gh, link) {
  this.title = title;
  this.description = description;
  this.img = img;
  this.gh = gh;
  this.link = link;
}

var takeAHike = new Projects('Take a Hike!', 'Quiz created using js, css, html to help users identify their perfect hike based on their self-reported experiences, tastes, and preferred proximity to near-death', 'js/take-a-hike.jpg', 'https://github.com/abswhite1/take-a-hike', 'https://abswhite1.github.io/take-a-hike/index.html');

takeAHike();
