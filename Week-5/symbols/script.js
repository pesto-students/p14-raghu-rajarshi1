// We are using an IIFE (Immediately Invoked Function Expression)
// to avoid polluting the global scope with our counter variable
const generateTransactionId = (function() {
    let counter = 0; // This will be private to the generateTransactionId function
  
    return function() {
      counter += 1; // Increment the counter for each ID generated
      // Use a template string to generate a unique part of the symbol
      return Symbol(`TRANSACTION_ID_${counter}`);
    };
  })();
  
  // Example usage:
  const transaction1 = generateTransactionId();
  console.log(transaction1); // Symbol(TRANSACTION_ID_1)
  
  const transaction2 = generateTransactionId();
  console.log(transaction2); // Symbol(TRANSACTION_ID_2)
  
  const transaction3 = generateTransactionId();
  console.log(transaction3); // Symbol(TRANSACTION_ID_3)
  