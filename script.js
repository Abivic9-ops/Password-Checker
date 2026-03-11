const input = document.querySelector(".input-field");
const inputIcon = document.querySelector(".input-icon");
const passwordStrength = document.querySelector(".progress-bar");

// Toggle password visibility
inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    // Toggle password type
    input.setAttribute(
        "type",
        input.getAttribute("type") === "password" ? "text" : "password"
    );

    // Change the icon
    inputIcon.setAttribute(
        "src",
        input.getAttribute("type") === "password"
            ? "./images/eye.png"
            : "./images/eye-slash.png"
    );
});

// Listen for typing in the password field
input.addEventListener("keyup", function () {
    let pass = input.value;
    checkStrength(pass);
});

function checkStrength(password) {
    let strength = 0;

    // Check lowercase and uppercase letters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        document.querySelector(".low-upper-case img").src =
            "./images/check-circle.png";
    } else {
        document.querySelector(".low-upper-case img").src =
            "./images/x-circle.png";
    }

    // Check numbers
    if (password.match(/([0-9])/)) {
        strength += 1;
        document.querySelector(".one-number img").src =
            "./images/check-circle.png";
    } else {
        document.querySelector(".one-number img").src =
            "./images/x-circle.png";
    }

    // Check special characters
    if (password.match(/([^a-zA-Z0-9])/)) {
        strength += 1;
        document.querySelector(".one-special-char img").src =
            "./images/check-circle.png";
    } else {
        document.querySelector(".one-special-char img").src =
            "./images/x-circle.png";
    }

    // Check length (8 or more characters)
    if (password.length >= 8) {
        strength += 1;
        document.querySelector(".eight-character img").src =
            "./images/check-circle.png";
    } else {
        document.querySelector(".eight-character img").src =
            "./images/x-circle.png";
    }

    // Update progress bar
    if (strength <= 1) {
        passwordStrength.classList.remove(
            "progress-bar-warning",
            "progress-bar-success"
        );
        passwordStrength.classList.add("progress-bar-danger");
        passwordStrength.style.width = "25%";
        document.getElementById("result").textContent = "Weak Password";
    } else if (strength === 2) {
        passwordStrength.classList.remove(
            "progress-bar-danger",
            "progress-bar-success"
        );
        passwordStrength.classList.add("progress-bar-warning");
        passwordStrength.style.width = "60%";
        document.getElementById("result").textContent = "Medium Strength";
    } else if (strength >= 3) {
        passwordStrength.classList.remove(
            "progress-bar-danger",
            "progress-bar-warning"
        );
        passwordStrength.classList.add("progress-bar-success");
        passwordStrength.style.width = "100%";
        document.getElementById("result").textContent = "Strong Password";
    }
}