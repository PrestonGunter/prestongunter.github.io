const newDay = new Date();
const dayNumber = newDay.getDay();

const element = document.getElementById("message");

if(dayNumber == 5){
  element.classList.add("showme")
} 
else{
  element.classList.add("hideme")
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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

    
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     var today  = new Date();
     document.getElementById("fullDate").innerHTML = today.toLocaleDateString("en-US", options);