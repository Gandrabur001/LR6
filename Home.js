function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
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


$('#hide').click(function() {
  $('#elem').slideUp(1000);
});
$('#show').click(function() {
  $('#elem').slideDown(1000);
});
$('#toggle').click(function() {
$('#elem1').slideToggle(1000);
});