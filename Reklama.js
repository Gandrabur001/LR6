function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let banner = document.querySelector('#banner')
let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        banner.style.left = timePassed + 'px';

        if (timePassed > 200) clearInterval(timer);

      }, 20);
