$('#img1').click(function() {
  $('#text1-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#text1-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img2').click(function() {
  $('#text2-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#text2-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img3').click(function() {
  $('#text3-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#text3-show').offset().top - 100 }, 'slow');
  });
});

$('#img4').click(function() {
  $('#text4-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#text4-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img5').click(function() {
  $('#text5-show').slideToggle(function() {
    $('html, body').animate({ scrollTop: $('#text5-show').offset().top - 100 }, 'slow');
  });
}); 

$('#img6').click(function() {
  $('#text6-show').slideToggle(function() {
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
$('#total').text(autoplaySlider.getTotalSlideCount());

$('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6').lightSlider({
  item: 1,
  auto: true,
  loop: true,    
  pauseOnHover: true,
  onSliderLoad: function() {
    $('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6').removeClass('cS-hidden');
  }
});

