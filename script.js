let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";  // Corrected variable case
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);  // Evaluate the expression
                input.value = string;
            } catch (error) {
                input.value = "Error";  // Handle invalid expressions
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";  // Clear the input
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove the last character
            input.value = string;
        } else {
            string += e.target.innerText;  // Append clicked button value
            input.value = string;
        }
    });
});