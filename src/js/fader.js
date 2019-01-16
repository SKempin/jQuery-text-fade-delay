var $ = require("jquery");
global.jQuery = require("jquery");
window.jQuery = $;
(function($) {
  $.fn.fader = function(options) {
    // default settings
    var settings = $.extend(
      {
        fadeSpeed: 500,
        duration: 2000,
        citeDelay: 1200,
        citeFadeSpeed: 750
      },
      options
    );
    /**
     * Fades out element `toFade`, fading in `toFade+1`
     * If `toFade` is the last element, then the first element will be
     * faded in.
     *
     * @param {Integer} toFade which element to fade out
     * @param {Array} testimonial array of jQuery elements
     */
    function fade(toFade, testimonial, cite) {
      // fade OUT element to opacity 0
      testimonial[toFade].animate(
        {
          opacity: 0
        },
        settings.fadeSpeed
      );
      cite[toFade].animate(
        {
          opacity: 0
        },
        settings.fadeSpeed
      );
      var toShow = toFade === testimonial.length - 1 ? 0 : toFade + 1; // fade IN element to opacity 1
      testimonial[toShow].animate(
        {
          opacity: 1
        },
        settings.fadeSpeed
      );
      cite[toShow]
        .stop(true, true)
        .delay(settings.citeDelay)
        .animate(
          {
            opacity: 1
          },
          settings.citeFadeSpeed
        ); // set duration of element
      setTimeout(function() {
        fade(toShow, testimonial, cite);
      }, settings.duration);
    } // find li, add to text array and hide them
    var testimonial = [];
    $(this)
      .find("li blockquote")
      .each(function() {
        testimonial.push($(this));
        $(this).css({
          opacity: 0
        });
      }); // find li, add to text array and hide them
    var cite = [];
    $(this)
      .find("li cite")
      .each(function() {
        cite.push($(this));
        $(this).css({
          opacity: 0
        });
      }); // fade in first item in array
    testimonial[0].animate(
      {
        opacity: 1
      },
      settings.fadeSpeed / 2
    ); // run function
    setTimeout(function() {
      fade(0, testimonial, cite);
    }, settings.duration);
    cite[0]
      .stop(true, true)
      .delay(settings.citeDelay / 2)
      .animate(
        {
          opacity: 1
        },
        settings.fadeSpeed / 2
      );
  };
})(jQuery);
