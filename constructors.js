'use-strict';

//This file is for the constructors of the individual projects on my portfolio page.

function Project (props) {
  this.title = props.title;
  this.link = props.link;
  this.description = props.description;
  this.contributors = props.contributors;
  this.image = props.image;
}
