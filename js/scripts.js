// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // Add click event to mobile menu. if clicked menu will toggle open and close
    $('#mobile-menu').on("click", function(e){
    	var nav = $('.nav-col');
    	if(nav.is(':visible')){
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    	} else {
        nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
      }
    });

    // add click event to links in menu. If in mobile view, toggle close the menu when clicked.
    $('.menu-wrapper a').on("click", function(e){
      var nav = $('.nav-col');
      if(nav.is(':visible')){
        if (window.innerWidth <= 768) {
          nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
        }
    	}
    });

    // add click event to links in menu. highligh the current section that is visible on page in menu.
    $('aside.menu-wrapper a').on('click', function(e) {
      $('.highlighted').removeClass('highlighted');
    	var link = $(this);
      var button = link.find('.menu-button');
      button.addClass('highlighted')
    	var linkHash = link[0].dataset.section;
      linkHash = '#' + linkHash;
      if (!$(linkHash).is(':visible')) {
        var visElm = $('.body-info:visible');
        if (visElm.length > 0) {
          visElm.hide();
        }
        $(linkHash).addClass('animated fadeIn');
        // $(linkHash).show(); // .show() was causing issues with toggle // TODO: fix someday maybe. not a big deal, no performace issues noticed in mobile and desktop views.
        $(linkHash).css("display", "block");
      }
      var hashData = {
        "hash": linkHash,
        "time": new Date()
      };
      localStorage.setItem('hash', JSON.stringify(hashData));

      if (JSON.parse(localStorage.getItem('hash')).hash == "#landing") {
        $('body').css({"background": "url(img/portland.jpg) no-repeat",
          "background-position": "center",
          "background-size": "cover"
        });
      } else {
        $('body').css("background", "rgba(240,240,240,.3)");
      }
    });

    // print button on resume
    $('i#print-page').on('click', function(){
		    window.print();
    })

    if (JSON.parse(localStorage.getItem('hash')).hash == "#landing") {
      $('body').css({"background": "url(img/portland.jpg) no-repeat",
        "background-position": "center",
        "background-size": "cover"
      });
    } else {
      $('body').css("background", "rgba(240,240,240,.3)");
    }

    showDefault();
    // window.onbeforeunload = updateHistory(localStorage.getItem('hash'))
});

// TODO: Fix page load. Hash not loaded on new user. Should clear cash if storage is old.
function showDefault() {
  var visElm = $('.body-info:visible');
  if (visElm.length == 0) {
    var hashData = JSON.parse(localStorage.getItem('hash'));
    if (hashData != undefined && hashData.hash.length > 0) {
      var date = new Date();
      var hashDataDate = Date(hashData.time);

      console.log(date.getTime());
      console.log(hashDataDate);
      if (date == "") {

      } else {
        var hash = hashData.hash;
      }
    } else if(window.location.hash.length > 0) {
      var hash = window.location.hash;
    }
    if (hash != undefined && hash.length > 0) {
      var cleanHash = hash.replace('#','');
      $(hash).show();
      $('.menu-' + cleanHash).addClass('highlighted');
      // localStorage.removeItem('hash')
    } else {
      $('#about').show();
      $('.menu-about').addClass('highlighted');
    }
  }
}

function scrollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function updateHistory(curr) {
    window.location.hash = curr;
}
