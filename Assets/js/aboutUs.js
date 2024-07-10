$(document).ready(function () {
    $('.bounce_in_animation').textAnimation(250, 100, 'slideDown');
});

(function( $ ){ // the link to this animation is found here https://codepen.io/worksbyvan/pen/QqNGbZ
  
    $.fn.textAnimation = function( animation_speed, text_speed, animation ){
      var text, i = 0;
      var $this = $(this);
      
      // store text and clear
      text = $this.text();
      $this.css('white-space', 'pre');
      $this.html('');
      
      var addLetter = setInterval(function(){
        $this.append('<div class="text_animation" style="display: inline-block; animation: ' + animation + ' ' + animation_speed + 'ms forwards">' + text[i] + '</div>');
        i++;
        if (i == text.length) clearInterval(addLetter);
      }, text_speed);
    }
  })( jQuery )