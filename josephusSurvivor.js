const Queue = require('./queue');

function survivor(numPeople, skip) {
    const queue = new Queue();
    
    for (let i = 1; i <= numPeople; i++) {
        queue.enqueue(i);
    }

    while (queue.size > 1) {
        for (let i = 0; i < skip - 1; i++) {
            const person = queue.dequeue();
            queue.enqueue(person);
        }
        queue.dequeue();
    }

    return queue.peek();
}

module.exports = survivor;

// Example
const numPeople = 10;
const skip = 3; 
const survive = survivor(numPeople, skip);
console.log(`The survivor is: ${survive}`);    // Output: The survivor is: 4