// Function to perform calculations
function calculator() {
    // Get user inputs
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    // Perform calculation based on the operation
    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            alert("Error: Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation. Please try again.");
        return;
    }

    // Display the result
    alert(`The result is: ${result}`);
}

// Run the calculator
calculator();
