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

  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

projectView = {};

projectView.handleMainNav = function() {
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
