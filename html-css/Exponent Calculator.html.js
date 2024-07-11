<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exponent Calculator</title>
</head>
<body>
    <h2>Exponent Calculator</h2>
    <label for="base">Enter the base (a):</label>
    <input type="number" id="base" min="0">
    <br><br>
    <label for="exponent">Enter the exponent (b):</label>
    <input type="number" id="exponent" min="0">
    <br><br>
    <button onclick="calculateExponent()">Click here to find the exponent!</button>
    <br><br>
    <p id="result"></p>

    
</body>
</html>
<script>
function calculateExponent() {
    // Get input values from the user
    let base = document.getElementById('base').value;
    let exponent = document.getElementById('exponent').value;

    // Convert input values to integers
    base = parseInt(base);
    exponent = parseInt(exponent);

    // Validate inputs
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    // Calculate the exponentiation without using Math.pow() or **
    let result = power(base, exponent);

    // Display the result
    document.getElementById('result').textContent = `${base} ^ ${exponent} = ${result}`;
}

// Function to calculate exponentiation using iterative multiplication
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}
</script>
