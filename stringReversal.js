const Stack = require('./stack');

function reverseString(str) {
    const stack = new Stack(); 

    for (let char of str) {
        stack.push(char);
    }

    let reversed = ""; 

    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed; 
}

module.exports = reverseString;

// Example
const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr); // Output: !dlroW ,olleH