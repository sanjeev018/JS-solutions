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
// -----------------------------------

// (7) Write a function to reverse a given string without using the built-in .reverse() method. ***

// let str = "sanjeev"

// let result = str.split('').reverse().join('')
// console.log(result)

// without method_______________

// function reverseString(str){
//     let string = ""
//     for(let i=str.length-1; i>=0; i--){ 
//         string+=str[i]
//     }
//     return string
// }
// let string = "sanjeev gour"
// console.log(reverseString(string))
// -----------------------------------------
// (8) Write a function to find the largest number in a given array.
// function largestNumber(arr){ 
//     let maxNum = arr[0]
//     for(let i=0; i<arr.length; i++){ 
//         if(arr[i] > maxNum){ 
//             maxNum = arr[i]
//         }
//     }
//     return maxNum

// }
// console.log(largestNumber([2,4,6,8,3,4]))
// __________________
// Math.max() with the spread operator.
// let array = [2,4,6,8,3,4]
// let maxNumber = Math.max(...array)
// console.log(maxNumber)
// __________________
// Reduce method.
// let array = [2,4,6,8,3,4]
// const maxNum = array.reduce((acc, curr,i)=> { 
//     return console.log(i)
// })
// -----------------------------------------------
// (9) Create a function that removes duplicate values from an array.
// function removeDuplicates(arr){ 
//     return [...new Set(arr)]; 
// }
// const arrayWithDuplicates = [1,2,2,3,4,4,5]; 
// const uniqueArray = removeDuplicates(arrayWithDuplicates)
// console.log(uniqueArray)

// _______________________________________________

// (10) FizzBuzz Problem
// Print numbers from 1 to 100:

// If divisible by 3, print "Fizz"
// If divisible by 5, print "Buzz"
// If divisible by both 3 and 5, print "FizzBuzz"

// function fizzBuzz(num){
//     for(let i=1; i<=num; i++){ 
//         if(i%3 === 0 && i%5 === 0){ 
//             console.log("FizzBuzz")
//         }else if(i%3 === 0){ 
//             console.log("Fizz")
//         }else if(i%5 === 0){ 
//             console.log("Buzz")
//         }else{ 
//             console.log(i)
//         }
//     }
//     return num;
// }
// console.log(fizzBuzz(100))
// _______________________________________________
// Flatten a Nested Array
//(11) Write a function that flattens an array of nested arrays.

// function flatten(arr){ 
//     return arr.flat(Infinity)
// }
// console.log(flatten([1,2,3,[4,5],6,[7,8,[9,10]]]))
// _______________________________________________
// (12)Find the Missing Number in an Array
// Given an array of numbers from 1 to N with one missing number, find the missing number.

// let arr = [1,2,3,4,5,7]
// let n = arr.length+1     //5

// let expectedSum = (n * (n+1))/2;   //15

// let actualSum = arr.reduce((sum,num)=> sum+num, 0)  //11

// let missNum = expectedSum - actualSum
// console.log(missNum)
// _________________________________________________________
// Check if Two Strings Are Anagrams
// Two strings are anagrams if they contain the same characters in the same frequency but in any order.

// function anagrams(str1 , str2){ 
//     if(str1.length !== str2.length) return false

//     return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
// }

// console.log(anagrams("sanjeev","veejnas"))
// __________________________________________________________

// ---------------------Practiced revision of the problems------------------

// Write a function that takes a string and returns the reversed version 

// function reverseString(str){ 
//     return str.split('').reverse().join('')
// }

// console.log(reverseString("hello world"))

// Check if a Number is Prime
// Write a function that checks whether a given number is prime.

// _______________________________________________________

// Find the Largest Number in an Array
// Write a function that takes an array of numbers and returns the largest number.

// function findLargetNum(arr){
//     let maxNum = arr[0]
//     for(let i=0; i<arr.length; i++){ 
//         let nums = arr[i]; 
//         if(nums>maxNum){ 
//             maxNum = nums
//         }
//     }
//     return maxNum
// }

// console.log(findLargetNum([3,4,5,6,12,3,41,34]))

// __________________________________________________________

// Check for Palindrome
// Write a function that checks if a given string is a palindrome.

// function isPalindrome(str){ 
//     return str === str.split('').reverse().join('')
// }
// console.log(isPalindrome("deed"))
// ____________________________________________________________________

// Remove Duplicates from an Array
// Write a function that removes duplicate values from an array.

// function removeDuplicates(arr){ 
//     return [new Set(arr)]
// }
// console.log(removeDuplicates([2,3,4,4,5,5,6,7,7,6,9,9]))
// _____________________________________________________________
// Find the First Non-Repeating Character in a String
// Given a string, return the first character that does not repeat

// function nonRepeating(str){
//     for(let i=0; i<str.length; i++){ 
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){ 
//             return str[i]
//         }
//     } 
//     return null

// }

// console.log(nonRepeating("swiss"))

// __________________________________________________________________________

// Flatten a Nested Array
// Write a function that flattens an array of nested arrays.

// function flatten(arr){ 
//     return [...arr.flat(Infinity)]
// }

// console.log(flatten([1,2,3,[4,[3,5],5,6],7,8]))

// __________________________________________________________________________
// Find the Missing Number in an Array
// Given an array of numbers from 1 to N with one missing number, find the missing number.  (#)

// function missingNum(arr){ 
//     let n = arr.length+1

//     for(let i=0; i<arr.length; i++){ 
//         let expectedSum = n*(n+1) / 2
        
//         let actualValue = arr.reduce((num, sum)=> num+sum ,0)
//         let result =   expectedSum - actualValue
        
//         return result
//     }
// }

// console.log(missingNum([1,2,3,4,5,7]))

// -----------------------------------------------
// Check if Two Strings are Anagrams
// Write a function to check if two strings are anagrams.

// function isAnagrams(str1, str2){ 
//     if(str1.length !== str2.length) return false
// //     return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')

//  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
    
// }
// console.log(isAnagrams("sheet" , "teesh"))
// -----------------------------------------------

// How To find duplicate elements in array in javascript|  (to do Prac)

// let arrnum = [1,2,3,3,4,4,5]

// let duplicate = arrnum.filter((ele, i , arr)=> { 
//     return arr.indexOf(ele) !== i
   
// })

// console.log(duplicate)
// -------------------------------------------------
// How To find max/min in a given array in javascript| Coding Interview Questions - #2 |

// let array = [2,1,4,5,7,8]

// let maxNum = array.reduce((prev , curr)=> { 
//     return prev > curr ? prev : curr
// })
// console.log(maxNum)

// let minNum = array.reduce((prev , curr)=> { 
//     return prev < curr ? prev : curr
// })
// console.log(minNum)

// --------------------------------------
// what is the difference between '==' and '===' operaror|Javascript Coding Interview Question #3

// let x=7;
// let y= "7"
// console.log(x==y)
// console.log(x===y)

// ++ The Difference between both the operators is that "==" is used to compare values whereas, "===" 
// is used to compare both values and types 

// ---------------------------------------------------
// How To find second Largest value in array|Javascript Coding Interview Question #4 |
// const arr = [12,13,65,332,23,43,214]
// let sorted = arr.sort((a,b)=> a-b)
// let sndLargest = arr[arr.length-2]
// console.log(sndLargest)

// ---------------------------------------------------------
// Javascript Coding Interview Questions - | what is difference between Filter and Find method #5 |

// const empArr = [ 
//     {name:"sanjeev", age:20},
//     {name:"Rishabh", age:30},
//     {name:"sanjeev", age:25},
//     {name:"sanjeev", age:40},
//     {name:"sanjeev", age:45},
//     {name:"sanjeev", age:50},
//     {name:"sanjeev", age:12},
// ]

// let filterMethod = empArr.filter((ele)=> { 
//     return ele.age > 25
// })

// let findMethod = empArr.find((ele)=> { 
//     return ele.age > 30
// })
// console.log(findMethod)

// (*)Filter() method returns the matched values in an array from the collection 
// (*)Find() method returns the first value that matches from the collection once it matches the value
// in findings , it will not check the remainings values in the array collection. 
// ---------------------------------------------------------
// How to Find missing elements in a given Array 1 to 10|Javascript Coding Interview Question#6 |
// let array = [1,2,3,4,5,7,8,9]

// let num = array.length+1   
// let sumFormula = num * (num + 1) / 2
// let reduceNum = array.reduce((num , curr)=> num+curr)
// let missingNum = sumFormula - reduceNum
// console.log(missingNum)
// -----------------------------------------------------------------
// how to find even or odd numbers in array in javascript| Coding Interview Questions #7

// let arr = [2,3,4,5,6,7,8,9,10,11,12]

// for(let i=0; i<arr.length; i++){ 
//     if(arr[i] % 2 == 0){ 
//         console.log(arr[i],"Even Number")
//     }else{ 
//         console.log(arr[i] ,"odd")
//     }
// }
// -------------------------------------------------------------------
// How to find the sum of all elements in array in Javascript|Coding Interview Question #8 |

// let arr = [12,12,12,12,12]
// let sumNum = 0

// for(let i=0; i<arr.length; i++){ 
//      sumNum += arr[i]
//     }
//     console.log(sumNum)
// -------------------------------------------------------------------
// how to find factorial of a given number in Javascript| Coding Interview Questions #9 |

// function factorialNum(num){
//     if(num === 0 || num ===1){ 
//         return 1
//     } 
//     let result = 1
//     for(let i=2; i<=num; i++){ 
//         result *= i
//     }
//     return result; 
// }
// console.log(factorialNum(5))
// -------------------------------------------------------------------
// how to find prime number in Javascript |Coding Interview Questions #10
// ex:  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

// function isPrime(num){ 
//    if(num < 2) return false

//    for(let i=2; i<num; i++){ 
//       if(num % i === 0){ 
//          return false
//       }
//    }
//    return true
// }

// console.log(isPrime(17))
// -------------------------------------------------------------------------
// how to find vowels from string in javascript| Coding Interview Questions #11 #javascript

// let word = "E"
// word = word.toLowerCase()

// if(word == "a" || word == "e" || word == "i" || word == "o" ||word == "u"){ 
//     console.log("word is vowel")
// }else{ 
//     console.log("word is not vowel")
// }

// '''''''''''''''''''''''''''''''

// vowels = ['a','e','i','o','u']  <<<<Practice>>>>
// count = 0 

// const countVowel = (str) => { 
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){ 
//             count++
//         } 
//     }
//     return count
// }

// let name = "sanjeev"
// console.log(countVowel("rajaram"))
// -------------------------------------------------------------------------
// how to reverse a string in Javascript| Coding Interview Questions #12

// function reverseString(str){ 
//     return str.split('').reverse().join('')
// }

// console.log(reverseString("sanjeev"))
// ------------------------------------------------------------
// heres are some palindrome words example 
// civic, radar, level, rotor, kayak, madam, and refer.

// function isPalindrome(str){
    
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
// }
// console.log(isPalindrome("LeVeL"))
// -------------------------------------------------------
// how to swap two variables without using the third|Javascript Coding Interview Question #14

// let a = 2
// let b = 3 

// // let temp = a
// // a=b
// // b=temp

// console.log(`value of a is ${a} and value of b ${b}`)

// let a = 5,
//  b = 10;

// [a, b] = [b, a];

// console.log(a, b); // Output: 10 5

// ----------------------------------------
// how to merged two arrays in javascript| Coding Interview Questions #15 |

// let arr1 = [1,2,11,4,5]
// let arr2 = [6,7,3,8,9,10]

// let result = arr1.concat(arr2)
// let sorted = result.sort((a,b)=> { 
//     a-b
// })
// console.log(sorted)
// ----------------------------------------
// How to find factor of a given integer in javascript|Coding Interview Question #16 |

// let num = 8

// for(let i=0; i<=num; i++){ 
//     if(num % i == 0){ 
//         console.log(i)
//     }
// }
// ----------------------------------------
// parseFloat
// const operator = prompt("please select operator either  + - / *")  <<practice>>
// const num1 = parseFloat(prompt("enter num 1")) 
// const num2 = parseFloat(prompt("enter num 2"))

// if(operator == "+"){ 
//    result = num1 + num2
// }else if(operator == "-"){ 
//     result = num1 - num2
// }else if(operator == "*"){ 
//     result = num1 * num2
// }else{ 
//     result = num1/num2
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`)
// ----------------------------------------
// How to compare two Arrays are Equal or Not in JavaScript| Coding Interview Question #18
// let arr1 = [2,3,4,5,6,7,8]
// let arr2 = [2,3,4,5,6,7,8]

// let result = JSON.stringify(arr1) === JSON.stringify(arr2)

// console.log(result)
// ----------------------------------------
// how to find intersection of two arrays in javascript| Coding Interview Questions - #19

let arr1 = [2,3,4,5,6,6.3,1]
let arr2 = [2,3,5,9,11,12,6]

let intersection = arr1.filter((ele)=> { 
    return arr2.includes(ele)
})
console.log([new Set(intersection)])
