var slider = document.getElementById("myRange");
var output = document.getElementById("monthly-price");
var views = document.getElementById("views");
var pageViewDisplay = document.getElementById("pageViewDisplay");

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

