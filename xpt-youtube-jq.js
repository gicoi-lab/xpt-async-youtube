/*
  credit : https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743

  jquery version
*/

$.xptYoutubeReload = function () {
  $('.youtube').each(function () {
    /* remove exit embed */
    $(this).find('img').remove();
    $(this).find('iframe').remove();

    console.log($(this).data('embed'));
    if ($(this).data('embed').length > 0){
    var source = "https://img.youtube.com/vi/"+ $(this).data('embed') +"/sddefault.jpg";
    var image = new Image();
    image.src = source;

    $(this).html('');
    $(this).append('<div class="play-button"></div>');
    $(this).append( image );

    $(this).click(function() {
      var iframe = document.createElement( "iframe" );
      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ $(this).data('embed') +"?rel=0&showinfo=0&autoplay=1" );

      $(this).html('');
      $(this).append( iframe );
    });
    }
  });
  return true;
}

$(function(){
  $.xptYoutubeReload();
});
