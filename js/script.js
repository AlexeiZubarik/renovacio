var load1 = false;
var load2 = false;
var load3 = false;
var load4 = false;
var load5 = false;
var load6 = false;

function loadSlider(id) {  
    $(id).lightSlider({
      item: 1,
      auto: true,
      loop: true,    
      pauseOnHover: true
    });
    $(id).show();
}

$('#img1').click(function() {
  $('#text1-show').slideToggle(function() {
    if (!load1) {
      loadSlider('#slider1');
      load1 = true;
    }    
    $('html, body').animate({ scrollTop: $('#text1-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img2').click(function() {
  $('#text2-show').slideToggle(function() {
    if (!load2) {
      loadSlider('#slider2');
      load2 = true;
    }  
    $('html, body').animate({ scrollTop: $('#text2-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img3').click(function() {
  $('#text3-show').slideToggle(function() {
    if (!load3) {
      loadSlider('#slider3');
      load3 = true;
    }  
    $('html, body').animate({ scrollTop: $('#text3-show').offset().top - 100 }, 'slow');
  });
});

$('#img4').click(function() {
  $('#text4-show').slideToggle(function() {
    if (!load4) {
      loadSlider('#slider4');
      load4 = true;
    }  
    $('html, body').animate({ scrollTop: $('#text4-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img5').click(function() {
  $('#text5-show').slideToggle(function() {
    if (!load5) {
      loadSlider('#slider5');
      load5 = true;
    }  
    $('html, body').animate({ scrollTop: $('#text5-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img6').click(function() {
  $('#text6-show').slideToggle(function() {
    if (!load6) {
      loadSlider('#slider6');
      load6 = true;
    }  
    $('html, body').animate({ scrollTop: $('#text6-show').offset().top - 100 }, 'slow');
  });
});

$('#btn1').click(function() {
  $('#text1-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img1').offset().top - 300}, 'slow');
  });
})

$('#btn2').click(function() {
  $('#text2-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img2').offset().top - 300}, 'slow');
  });
})

$('#btn3').click(function() {
  $('#text3-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img3').offset().top - 300}, 'slow');
  });
})

$('#btn4').click(function() {
  $('#text4-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img4').offset().top - 300}, 'slow');
  });
})

$('#btn5').click(function() {
  $('#text5-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img5').offset().top - 300}, 'slow');
  });
})

$('#btn6').click(function() {
  $('#text6-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#img6').offset().top - 300}, 'slow');
  });
})

var icons = {
  header: "glyphicon glyphicon-plus-sign",
  activeHeader: "glyphicon glyphicon-plus-sign"
};

$('#accordion').accordion({
  collapsible: true,
  icons: icons
});

var autoplaySlider = $('#autoplay').lightSlider({
  item: 4,
  auto: true,
  loop: true,    
  pauseOnHover: true,
  onBeforeSlide: function (el) {
    $('#current').text(el.getCurrentSlideCount());
  },
  onSliderLoad: function() {
    $('#autoplay').removeClass('cS-hidden');
  } 
});
// $('#total').text(autoplaySlider.getTotalSlideCount());



