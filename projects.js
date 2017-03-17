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
  //Create a template in the html for this stuff!
  //Needs: .template data-''
  // var $newProject = $('article.template').clone().removeClass('template');

  // $newProject.attr('', this.);
  $('.template').hide();
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  // $newProject.find('.title').text(this.title);
  // $newProject.find('.link').attr('href', this.link);
  // $newProject.find('.description').text(this.description);
  // // $newProject.find('.contributors').html(this.contributors);
  // // $newProject.find('').attr('datetime', this.);
  // $('#projects').css('background-image' , this.image);
  // // $newProject.find('').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // return $newProject;

  return templateRender(this);

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
