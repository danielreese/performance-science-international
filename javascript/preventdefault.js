document.getElementById("subscriptionForm",).addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(this);

    // Send form data to the webhook via fetch API
    fetch(this.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            showAlert("Subscription successful!");
        } else {
            showAlert("There was an issue with your subscription. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        showAlert("An error occurred. Please try again.");
    });
});

document.getElementById("quizForm",).addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(this);

    // Send form data to the webhook via fetch API
    fetch(this.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            showAlert("Submitted!");
        } else {
            showAlert("There was an issue with your subscription. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        showAlert("An error occurred. Please try again.");
    });
});

// Function to display the custom alert
function showAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    alertMessage.textContent = message;
    alertBox.style.display = "block";

    document.getElementById("close-alert").onclick = function() {
        alertBox.style.display = "none";
    };

    // Close the alert when the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target === alertBox) {
            alertBox.style.display = "none";
        }
    };
}