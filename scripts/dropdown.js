/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-menu");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  	console.log('This Ran')
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show-menu')) {
        myDropdown.classList.remove('show-menu');
      }
  }
}