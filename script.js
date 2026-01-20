let display = document.getElementById('display');

// Adds numbers or operators to the screen
function append(value) {
    display.value += value;
}

// Clears everything
function clearDisplay() {
    display.value = '';
}

// Deletes the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// The "Brain" - does the math
function calculate() {
    try {
        // eval() takes the string and treats it like a math problem
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}