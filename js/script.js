// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  // sectionsColor: ['#3dcfa1'],
  sectionSelector: '.section',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['HOME', 'NHCARD', 'SPEEDGONGSIL', 'ZEROBANG', 'DRAPT', 'JOEUN', 'BRICYTI', 'THEHOME', 'BADAPUNGKYUNG', 'PROFIE'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $nav.css('background', 'rgba(32, 35, 35, 0.84)');
    if (index == 9) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 9) {
      $('#fp-nav').show();
    }
  },


});