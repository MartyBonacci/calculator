// a calculator that takes input from the user and performs the operation
// based on the input
// the user can input the operation and the numbers to perform the operation on

// import the readline module
const readline = require('readline');

// create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  // output: process.stdout
});

// create a function that will be called when the user inputs data
rl.question('Enter the operation and the numbers separated by spaces: ', (input) => {
  // split the input into an array
  const inputArray = input.split(' ');

  // get the operation from the first element of the array
  const operation = inputArray[0];

  // get the numbers from the rest of the array
  const numbers = inputArray.slice(1).map(Number);

  // perform the operation based on the input
  switch (operation) {
    case 'add':
      console.log(numbers.reduce((acc, num) => acc + num));
      break;
    case 'subtract':
      console.log(numbers.reduce((acc, num) => acc - num));
      break;
    case 'multiply':
      console.log(numbers.reduce((acc, num) => acc * num));
      break;
    case 'divide':
      console.log(numbers.reduce((acc, num) => acc / num));
      break;
    default:
      console.log('Invalid operation');
  }

  // close the interface
  rl.close();
});