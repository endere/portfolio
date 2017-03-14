'use-strict';

//This file is for the constructors of the individual projects on my portfolio page.

function Project (title, link, description, contributors, image) {
  this.title = title;
  this.link = link;
  this.description = description;
  this.contributors = [contributors];
  this.image = image;
}
