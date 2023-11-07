function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    // Divide the numbers into even and odd arrays
    numbers.forEach(number => {
        if (number % 2 === 0) {
            evenNums.push(number);
        } else {
            oddNums.push(number);
        }
    });

    // Sort the arrays
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);

    // Output the sorted arrays
    if (evenNums.length > 0) {
        console.log('Even numbers:');
        evenNums.forEach(number => console.log(number));
    } else {
        console.log('Even numbers: None');
    }

    if (oddNums.length > 0) {
        console.log('Odd numbers:');
        oddNums.forEach(number => console.log(number));
    } else {
        console.log('Odd numbers: None');
    }
}

// Test the function
let nums = [4, 2, 9, 1, 8];
divideArray(nums);

// Test the function with no odd numbers
nums = [4, 2, 8];
divideArray(nums);
