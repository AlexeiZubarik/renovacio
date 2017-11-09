$('#img1').click(function() {
  $('#text1-show').slideToggle(function() {
  });
}); 

$('#img2').click(function() {
  $('#text2-show').slideToggle(function() {
  });
}); 

$('#img3').click(function() {
  $('#text3-show').slideToggle(function() {
  });
});

$('#img4').click(function() {
  $('#text4-show').slideToggle(function() {
  });
}); 

$('#img5').click(function() {
  $('#text5-show').slideToggle(function() {
  });
}); 

$('#img6').click(function() {
  $('#text6-show').slideToggle(function() {
  });
});

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
  } 
});
$('#total').text(autoplaySlider.getTotalSlideCount());

$('#slider1').lightSlider({
  item: 1,
  slideMargin:0,
  loop:true
});