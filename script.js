document.getElementById("submitButton").addEventListener("click", function() {
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById("fullName").value.trim();
    const nameError = document.getElementById("nameError");
    if (fullName === "") {
        nameError.textContent = "Full name is required.";
        nameError.style.display = "block";
        isValid = false;
    } else if (fullName.length < 3) {
        nameError.textContent = "Full name must be at least 3 characters long.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Mobile Number Validation
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const mobileError = document.getElementById("mobileError");
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
        mobileError.textContent = "Mobile number must be 10 digits.";
        mobileError.style.display = "block";
        isValid = false;
    } else {
        mobileError.style.display = "none";
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // If all fields are valid
    if (isValid) {
        alert("Registration successful!");
    }
});
