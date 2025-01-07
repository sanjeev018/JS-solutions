//(1) write a function to reverse a string without using built-in methods

// function reverseString(str){ 
//     let reveresed = ""
//     for(let i=str.length-1; i>=0; i--){ 
//       reveresed += str[i];  
//     }
//     return reveresed; 
// }
// console.log(reverseString("hello"))
// -------------------------------------------------------------------
//(2) Write a function to check if a string is a palindrome 

// function isPalindrome(str){ 
//     const reveresed = str.split('').reverse().join('');
//     return str === reveresed;
// }
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("Hello"));

// -------------------------------------------------------------------

// (3) write a function to sum of an array
// const arr = [2,4,6,8,10]
// function sumOfArray(arr){ 
//     let sum = 0
//     for(let i=0; i<arr.length; i++){ 
//     sum+=arr[i]   
// }
// return sum
// }
// console.log(sumOfArray([20,25]))
// ----------------------------------------------

// function fizzbuzz(number){ 
//     for(let i=1; i<=number; i++){ 
//         if(i % 3 === 0 && i % 5 === 0){ 
//             console.log("FizzBuzz")
//         }else if(i % 3 === 0){ 
//             console.log("Fizz")
//         }else if(i % 5 === 0){ 
//             console.log("Buzz")
//         } else { 
//             console.log(i);
//         }
//         }
// }
// console.log(fizzbuzz(100))
// ----------------------------------------------
// (4) Find the Maximum Number in an Array 
// let arr = [2,4,6,2,1]
// let max = arr[0]

// for(let i=0; i<arr.length; i++){ 
// if(arr[i] > max){ 
//     max = arr[i]
// }
// }
// console.log(max)  

// ---------------------
// let arr = [2,34,5,6,7]
// let max = Math.max(...arr)
// console.log(max)
// ___________________________________
//(5) Calculate the sum of digits of a given number.
// without methods
// let arr = [2,2,2,2,2]
// let sum = 0
// for(let i=0; i<arr.length; i++){ 
//     sum += arr[i]
//     console.log(sum)
// }
// ---------------------------
// function sumOfDigits(num) {
//     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
// }
// console.log(sumOfDigits(123456)); // Output: 6
// ----------------------------------------
// (6)find duplicates value of an array
// const arr = [1,2,2,3,4,5,6,7,7,8];

// const result = arr.filter((ele, index, arr)=> { 
//     return arr.indexOf(ele) !== index
// })

// console.log(arr)
// console.log(result)
