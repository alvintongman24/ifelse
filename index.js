// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
const arr = [2020, 2025, 2028];

function yearsofyears(arr) {
  var Remainder4 = arr.map((arra) => arra % 4);
  var Remainder100 = arr.map((arra) => arra % 100);
  var Remainder400 = arr.map((arra) => arra % 400);

  for (let i = 0; i < arr.length; i++) {
    if (
      (Remainder4[i] === 0 && Remainder100[i] !== 0) ||
      Remainder400[i] === 0
    ) {
      console.log(arr[i] + " is a leap year: good to go");
    } else {
      console.log(arr[i] + " is not a leap year: continue");
    }
  }
}

yearsofyears(arr);

// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

// Write a program that prompts the user to enter their age

const Age = prompt("What is your Age ");

if (Age <= 12) {
  console.log("Children will be paying $10");
} else if (Age <= 17) {
  console.log("Teenagers will be paying $15");
} else if (Age <= 18) {
  console.log("Adult will be paying $20");
} else {
  console.log("Sorry, you are not allowed or you didnt type a number");
}

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
// function addup(num) {
//   //BASE CASE: where the recursive function will terminate itself
//   if (num === 1) {
//     return 1;
//   }
//   console.log(num + num - 1);

//   //RECURSIVE CASE whre the function calls itself repeatedly
//   return num + addup(num - 1); // 10  +  (9) = 19      19 + (8) = 27     27 + (7) = 34   34 + (6) = 40
// }
// console.log(addup(10));

function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2); //0 - 1 = 0 + 0-2 = 0
}

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); // Output: 8

function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Base case: A single character or empty string is a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Check if first and last characters are the same
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursive case: Check the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Decision Making (if-else and switch) & Recursion:  It's about to answer and give solutions to the following tasks :

// Instructions

// Decision Making (if-else and switch): ( choose at least 2 tasks from below)

// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20
// Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

// Recursion: ( choose at least 2 tasks from below)

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

// Power Function: Write a recursive function to calculate the result of raising a number to a given power.  2%
