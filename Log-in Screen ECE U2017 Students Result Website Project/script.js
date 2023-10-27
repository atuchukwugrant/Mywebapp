function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "example@email.com" && password === "yourpassword") {
        alert("Sign-in successful!");
        return true;
    } else {
        document.getElementById("errorText").textContent = "Invalid email or password.";
        setTimeout(function() {
            document.getElementById("errorText").textContent = "";
        }, 3000);
        return false;
    }
}

// Function to show the error text
function showErrorText(message) {
    const errorText = document.getElementById("errorText");
    errorText.textContent = "⚠️ " + message;
    errorText.classList.add('show');
}

// Function to hide the error text
function hideErrorText() {
    const errorText = document.getElementById("errorText");
    errorText.classList.remove('show');
}

// Example usage of showErrorText and hideErrorText
// You can call these functions in your validateForm function
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "example@email.com" && password === "yourpassword") {
        alert("Sign-in successful!");
        return true;
    } else {
        showErrorText("Invalid email or password.");
        setTimeout(hideErrorText, 3000);
        return false;
    }
}

