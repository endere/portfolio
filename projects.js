'use-strict';

//This file is for the constructors of the individual projects on my portfolio page.

allProjects = [];

function Project (props) {
  this.title = props.title;
  this.link = props.link;
  this.description = props.description;
  this.contributors = props.contributors;
  this.image = props.image;
}

Project.prototype.toHtml = function() {
  $('.template').hide();
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  // $('#projects').css('background-image' , this.image);
  // // $newProject.find('').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  return templateRender(this);

  $('#projects').on('click', function() {
    console.log(this.link);
    // window.location.href = a.link;
  });
};

// projectData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

projectData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});

allProjects.forEach(function(a){
  //projects id for where to put them.
  $('#projects').append(a.toHtml());
});

$('.hamburger').on('hover', function() {
  $('ul').css('display', 'block');
  console.log($('ul').css());
  $('.nav-list').css('display', 'block');
});
