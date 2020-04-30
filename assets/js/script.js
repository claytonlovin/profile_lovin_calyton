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



 