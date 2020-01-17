$(document).ready(function() {

    $('.next').click(
      function() {
        clickNext();
      }
    );

    $('.prev').click(
      function() {
        clickPrev();
      }
    );

    // Keyboard Arrows Navigation
    $(document).keydown(
      function() {
        if(event.keyCode == 39) {        // Right Arrow
          clickNext();
        }
        else if (event.keyCode == 37) {  // Left Arrow
          clickPrev();
        }
      }
    );

    // Circles Navigation
    $('.nav i.fa-circle').click(
      function() {
        // Al click sul cerchio specifico
        // aggiungi la classe active e
        // rimuovila dal cerchio che la conserva
        $(this).addClass('active'));

        // aggiungi la classe active all'immagine X
        // corrispondente al numero del cerchio e

        // rimuovila dall'immagine che la conservava

    });

}); // document.ready()

// Slider Arrow Right Next
function clickNext() {

  // Slider Images
  var imgActive = $('img.active');
  var imgNext = imgActive.next();

  // Slider Circles
  var circleActive = $('i.active');
  var circleNext = circleActive.next();

  if (imgActive.hasClass('last') == true) {
    // Images
    imgActive.removeClass('active');
    $('img.first').addClass('active');
    // Circles
    circleActive.removeClass('active');
    $('i.first').addClass('active');
  } else {
    // Images
    imgActive.removeClass('active');
    imgNext.addClass('active');
    //  Circles
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }
}

function clickPrev() {
  // Slider Images
  var imgActive = $('img.active');
  var imgPrev = imgActive.prev();

  // Slider Circles
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();

  if (imgActive.hasClass('first') == true) {
    // Images
    imgActive.removeClass('active');
    $('img.last').addClass('active');
    // Circles
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  } else {
    // Images
    imgActive.removeClass('active');
    imgPrev.addClass('active');
    //  Circles
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
