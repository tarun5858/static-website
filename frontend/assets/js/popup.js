$(document).ready(function () {
    $('#submitButton').on('click', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch form values
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phonenumber').val().trim();

        // Debugging: Check phone value
        console.log("Phone Input Value:", phone);

        // Regex patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format
        const phonePattern = /^\d{10}$/; // 10-digit phone number

        // Validation checks
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Success Message (Optional)
        alert("Form submitted successfully!");

        // Close the modal
        $('#exampleModal').modal('hide');

        // Redirect to thank-you page
        window.location.href = "thank-you.html";
    });
});
