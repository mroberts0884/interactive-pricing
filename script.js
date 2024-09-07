var slider = document.getElementById("myRange");
var output = document.querySelector("#monthly-price .price");
var views = document.getElementById("views");
var pageViewDisplay = document.getElementById("pageViewDisplay");
var toggle = document.getElementById('toggle-switch')

// Display the default slider value
output.innerHTML = "$" + slider.value;
pageViewDisplay.innerHTML = calculatePageViews(slider.value);

// Update the current slider value and corresponding views
slider.oninput = function() {
    var paymentValue = this.value;
    updateValues(paymentValue);
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
        output.textContent = "$" + newValue.toFixed(2); // Update the displayed value
        updateValues(newValue.toFixed(2));
    } else {
        var originalValue = parseFloat(slider.value);
        output.textContent = "$" + originalValue.toFixed(2); // Reset to original slider value
        updateValues(originalValue);
    }
}

function updateValues(value) {
    var numericValue = parseFloat(value);
    var viewsValue = calculatePageViews(numericValue);
    views.value = viewsValue;
    pageViewDisplay.innerHTML = viewsValue; // Show the value in the span
}
