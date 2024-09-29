const Stack = require('./stack');

function calculator(expression) {
    const stack = new Stack();
    const tokens = expression.split(' '); 

    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];

        if (['+', '-', '*', '/'].includes(token)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
}

module.exports = calculator;

// Example
const expression = "+ 1 * 2 3"; //  1 + (2 * 3)
console.log(calculator(expression)); // Output: 7