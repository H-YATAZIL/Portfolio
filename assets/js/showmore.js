document.addEventListener("DOMContentLoaded", function() {
    // Select all expand buttons and their associated additional descriptions
    const expandButtons = document.querySelectorAll(".expand-button");
    const additionalDescriptions = document.querySelectorAll(".additional-description");
    

    // Add a click event listener to each expand button
    expandButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            if (additionalDescriptions[index].style.display === "none" || additionalDescriptions[index].style.display === "") {
                additionalDescriptions[index].style.display = "inline";  // Show the additional description
                button.textContent = "Show Less";
            } else {
                additionalDescriptions[index].style.display = "none";  // Hide the additional description
                button.textContent = "Show More...";
            }
        });
    });
});
