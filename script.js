var slider = document.getElementById("myRange");
var output = document.getElementById("monthly-price");
var views = document.getElementById("views");
var pageViewDisplay = document.getElementById("pageViewDisplay");
var toggle = document.getElementById('toggle-switch')

// Display the default slider value
output.innerHTML = "$" + slider.value + " /month";
pageViewDisplay.innerHTML = calculatePageViews(slider.value);

// Update the current slider value and corresponding views
slider.oninput = function() {
    var paymentValue = this.value
    output.innerHTML = "$" + paymentValue + " /month"; 
    var viewsValue = calculatePageViews(paymentValue)
    views.value = viewsValue;
    pageViewDisplay.innerHTML = viewsValue; // Show the value in the span
    toggle.oninput
}

function calculatePageViews(paymentValue) {
    if (paymentValue >= 8 && paymentValue < 12) {
        return 10000
    }
    else if (paymentValue >= 12 && paymentValue < 16) {
        return 50000
    }
    else if (paymentValue >= 16 && paymentValue < 24) {
        return 100000 
    }
    else if (paymentValue >= 24 && paymentValue < 36) {
        return 100000 
    }
    else if (paymentValue == 36) {
        return 1000000
    }

}

toggle.oninput = function() {
    var currentValue = parseFloat(output.textContent.replace(/[^0-9.-]+/g, "")); // Extract the numeric value from output
    var percentage = currentValue * 0.25;
    if (this.checked) {
         var newValue = currentValue - percentage;
        output.textContent = "$" + newValue.toFixed(2) + "/month"; // Update the displayed value

    } else {
        output.textContent = "$" + parseFloat(slider.value).toFixed(2) + "/month"; // Reset to original slider value when unchecked
    }
}
