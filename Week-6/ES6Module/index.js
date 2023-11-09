// Import the add function from calculator.js
import { add } from './calculator.js';

// Import the subtract function from calculator.js
import { subtract } from './calculator.js';

// Use the imported add function and log the result
const sum = add(2, 3);
console.log(sum); // Should log: 5

// Use the imported subtract function and log the result
const difference = subtract(2, 3);
console.log(difference); // Should log: -1
