// Calculator class with basic arithmetic methods
class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return a / b;
    }
  }
  
  // ScientificCalculator class that extends Calculator with advanced methods
  class ScientificCalculator extends Calculator {
    square(a) {
      return a * a;
    }
  
    cube(a) {
      return a * a * a;
    }
  
    power(a, b) {
      return Math.pow(a, b);
    }
  }
  
  // Creating an instance of ScientificCalculator
  const sciCalc = new ScientificCalculator();
  
  // Using "call" to invoke the "add" method of Calculator with arguments 10 and 5
  const addResult = sciCalc.add.call(sciCalc, 10, 5);
  console.log('Add result using "call":', addResult);
  
  // Using "apply" to invoke the "subtract" method with arguments 10 and 5
  const subtractResult = sciCalc.subtract.apply(sciCalc, [10, 5]);
  console.log('Subtract result using "apply":', subtractResult);
  
  // Using "bind" to create a new method that multiplies a number by 2
  const multiplyByTwo = sciCalc.multiply.bind(sciCalc, 2);
  const multiplyByTwoResult = multiplyByTwo(5);
  console.log('Multiply by two using "bind":', multiplyByTwoResult);
  
  // Using "bind" to create a new method that raises a number to the power of 3
  const powerOfThree = sciCalc.power.bind(sciCalc, undefined, 3);
  const powerOfThreeResult = powerOfThree(2);
  console.log('Power of three using "bind":', powerOfThreeResult);
  
  // Optional: Call the "multiplyByTwo" method with argument 5 and print the result
  console.log('Result of multiplyByTwo(5):', multiplyByTwo(5));
  
  // Optional: Call the "powerOfThree" method with argument 2 and print the result
  console.log('Result of powerOfThree(2):', powerOfThree(2));
  