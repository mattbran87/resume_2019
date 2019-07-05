// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // window.location.hash = "";
    $('#mobile-menu').on("click", function(e){
    	var nav = $('.nav-col');
    	if(nav.is(':visible')){
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    	} else {
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
      }
    });

    $('aside.menu-wrapper a').on('click', function(e) {
      $('.highlighted').removeClass('highlighted');
    	var link = $(this);
      var button = link.find('.menu-button');
      button.addClass('highlighted')
      console.log(button);
    	var linkHash = link[0].hash;
      if (!$(linkHash).is(':visible')) {
        var visElm = $('.body-info:visible');
        if (visElm.length > 0) {
          visElm.hide();
        }
        $(linkHash).addClass('animated fadeIn');
        // $(linkHash).show();
        $(linkHash).css("display", "block");
      }
    });

    $('i#print-page').on('click', function(){
		    window.print();
    })

    showDefault();
});

function showDefault() {
  var visElm = $('.body-info:visible');
  if (visElm.length == 0) {
    var hash = window.location.hash;
    var cleanHash = hash.replace('#','');
    if (hash.length > 0) {
      $(hash).show();
      $('.menu-' + cleanHash).addClass('highlighted');
    } else {
      $('#about').show();
      $('.menu-about').addClass('highlighted');
    }
  }
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function scrollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
