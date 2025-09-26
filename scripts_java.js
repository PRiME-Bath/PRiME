element = document.getElementById("clean-collapse");
element.classList.remove("callout-style-default");

// Remove background
elements = document.querySelectorAll('[id=clean-collapse]').forEach(
    function(element) {
        element.classList.remove("callout-style-default");
    }
)

// Add arrow to front to signify dropdownyness
arrow = "▶";
elements = document.querySelectorAll('.callout-caption-container').forEach(
    function(element) {
        element.innerHTML = arrow + element.innerHTML;
    }
)