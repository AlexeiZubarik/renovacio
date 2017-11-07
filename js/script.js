$('#img1').click(function() {
  $('#text1-show').slideToggle(function() {
    $('#text1-show p').show('slow');
  });
}); 

$('#img2').click(function() {
  $('#text2-show').slideToggle(function() {
    $('#text2-show p').show('slow');
  });
}); 

$('#img3').click(function() {
  $('#text3-show').slideToggle(function() {
    $('#text3-show p').show('slow');
  });
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