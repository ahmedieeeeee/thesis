function validateLogin(event) {
    event.preventDefault();
    alert("Login form submitted successfully!");
}

function validateRegistration(event) {
    event.preventDefault();
    alert("Registration form submitted successfully!");
}
// Sample JavaScript Validation
document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert("Please enter a valid expiry date in MM/YY format.");
        return;
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    alert("Ticket purchase successful!");
});
