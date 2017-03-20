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
    if ($(this).attr('data-content') === 'projects') {
      $('.template').fadeIn();
    }
  });

};

projectView.handleProjectSelection = function() {
  $('.template *:nth-of-type(n+2)').hide();

  $('.template').on('click', function(e) {
    e.preventDefault();
    $('.template').hide();
    $(this).fadeIn();
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
projectView.handleProjectSelection();
