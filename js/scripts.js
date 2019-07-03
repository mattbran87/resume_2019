// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $('#mobile-menu').on("click", function(e){
    	var nav = $('.nav-col');
    	if(nav.is(':visible')){
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    	} else {
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
      }
    });

    $('aside.menu-wrapper a').on('click', function(e) {
    	var link = $(this);
    	var linkHash = link[0].hash;
      if (!$(linkHash).is(':visible')) {
        var visElm = $('.body-info:visible');
        if (visElm.length > 0) {
          visElm.hide();
        }
        $(linkHash).addClass('animated fadeIn');
        $(linkHash).show();
      }
    });

    showDefault();
});

function showDefault() {
  var visElm = $('.body-info:visible');
  if (visElm.length == 0) {
    $('#about').show();
  }
}
