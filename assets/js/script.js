function popup() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

// 
  window.addEventListener("DOMContentLoaded", function() {
    new SmartPhoto(".js-smartPhoto");
  });


var whatlink = document.querySelector('.btn');

 whatlink.addEventListener('click', function(e){
    e.preventDefault()

   window.open('https://api.whatsapp.com/send?l=pt&phone=5531996541296')
  })

// SCROOL

$('nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
      menuHeight = $('nav').innerHeight(),
      targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 700);
});

debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function(){
  var $target = $('.anime'),
      animationClass = 'anime-start',
      offset = $(window).height() * 3/4;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function(){
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(debounce(function(){
    animeScroll();
  }, 200));
})();

 