var slider = document.getElementById("myRange");
var output = document.getElementById("monthly-price");
output.innerHTML = "$" + slider.value + "/month"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "$" + this.value + " /month"; 
  
}
slider.style.backgroundColor = "yellow";
