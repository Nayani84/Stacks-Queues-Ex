const Stack = require('./stack');

function isBalanced(str) {
    const stack = new Stack();
    const openBrackets = "({[";
    const closeBrackets = ")}]";
    const matchBrackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } 
        else if (closeBrackets.includes(char)) {
            if (stack.isEmpty() || stack.pop() !== matchBrackets[char]) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

module.exports = isBalanced;

// Example
const strs = [ "hello", "(hi) [there]", "(hi [there])", "(((hi)))", "(hello", "(nope]", "((ok) [nope)]" ];

strs.forEach(str => {
    console.log(`"${str}": ${isBalanced(str)}`);
});