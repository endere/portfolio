'use-strict';

allProjects = [];

function Project (props) {
  this.title = props.title;
  this.link = props.link;
  this.description = props.description;
  this.contributors = props.contributors;
  this.image = props.image;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('template');

  $newProject.find('.title').text(this.title);
  $newProject.find('.link').attr('href', this.link);
  $newProject.find('.description').text(this.description);
  $('#projects').css('background-image' , this.image);
  return $newProject;
};

projectView = {};

projectView.handleMainNav = function() {
  $('.template').hide();
  $('.site-navigation').on('click', '.tab', function(e) {
    $('.content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

};

projectData.forEach(function(ele) {
  allProjects.push(new Project(ele));
  console.table(allProjects);
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

projectView.handleMainNav();
