// Function that creates a counter
function counter() {
    let count = 0; // This variable is private to the counter instance
  
    // The function returned is a closure that has access to the count variable
    return function() {
      count += 1; // Increment the count
      return count; // Return the updated count
    };
  }
  
  // Create two instances of the counter
  const firstCounter = counter();
  const secondCounter = counter();
  
  // Array to store values from firstCounter
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Array to store values from secondCounter
  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log('firstValues array:', firstValues); // Should log: firstValues array: [1, 2, 3, 4, 5]
  console.log('secondValues array:', secondValues); // Should log: secondValues array: [1, 2, 3]
  