// #1: Print numbers from 1 to 10
// for(var i=1 ; i<=10; i++){ 
//     console.log(i)
// }
// _________________________________________

// #2: Print the odd numbers less than 100
// for(var i=1; i<=100; i++){ 
//     if(i % 2 !== 0){ 
//         console.log(i)
//     }
// }
// -----------------
// for(var i=1; i<=100; i += 2){ 
//     console.log(i)
// }
// _________________________________________

// #3: Print the multiplication table with 7
// for(var i=7; i<=70; i += 7){ 
//     console.log(i)
// }
// -----------------
// for(var i=1; i<=10; i++){ 
//     var table = "7*"+ i + " = " + 7 * i;   
//     console.log(table)
// }
// _________________________________________

// #4: Print all the multiplication tables with numbers from 1 to 10
// for(var i=1; i<=10; i++){ 
//     console.log("table of",i)
//     for(var j=1; j<=10; j++){ 
//         console.log(`${i}*${j}=${i*j}`)
//     }
//     console.log("---------------------")
// }
// _________________________________________
// #5: Calculate the sum of numbers from 1 to 10

// for(var i=1; i<=10; i++){ 
//     var sum = 0
//     sum+=i
// }
// console.log(sum)
// _________________________________________
// Calculate 10!

// let number = 1

// for(var i=1; i<=10; i++){ 
//     var sum= number*=i
// }
// console.log(sum)
// _________________________________________

// #7: Calculate the sum of odd numbers greater than 10 and less than 30

// var sumOfOdd = 0

// for(var i=10; i<=30; i++){ 
//     if(i%2 !== 0){ 
//         sumOfOdd+=i
//         console.log(sumOfOdd)
//     }
// }
// _________________________________________

// #8: Create a function that will convert from Celsius to Fahrenheit
// function celsiusToFahrenheit(n)
// {
//     return n * 1.8 + 32;
// }

// let r = celsiusToFahrenheit(40);
// console.log(r);
// _________________________________________
// #9: Create a function that will convert from Fahrenheit to Celsius

// function fahrenheitToCelsius(n){ 
//     {
//         return (n-32)/1.8
//     }
// }
// let r = fahrenheitToCelsius(104);
// console.log(r);
// _________________________________________
// #10: Calculate the sum of numbers in an array of numbers

// let arr = [2,2,2,2,2,2,2] 
// let sumOfNum = 0
// for(let i=0; i<arr.length; i++){ 
//     sumOfNum+=arr[i]
// }
// console.log(sumOfNum)
// ----------------------

// function sumOfArray(arr){ 
//     let sum = 0; 
//     for(let i=0; i<arr.length; i++){ 
//         sum+=arr[i]
//     }
//     return sum; 
// }
// console.log(sumOfArray([50,50,50,50]))
// _____________________________________________
// 11: Calculate the average of the numbers in an array of numbers

// function avgOfNum(arr){
//     let n = arr.length
//     let sum = 0
//     for(let i=0; i<arr.length; i++){ 
//         sum+=arr[i]
//     }
//     return sum/n;
// }
// console.log(avgOfNum([5,5,5,5,5]))
// _____________________________________________
// #12: Create a function that receives an array of numbers and returns an array containing only the
//  positive numbers

// function positiveNumber(arr){ 
//     let arr2 = []
//     for(let i=0; i<arr.length; i++){ 
//         let ele = arr[i];
//         if(ele >= 0){ 
//             arr2.push(ele)

//         }
//     }
//     return arr2 
// }
// console.log(positiveNumber([3,4,5,-7,-5,4]))

// -------------------------
// function positiveNumber(arr){ 
//     return arr.filter((ele => ele>=0))
// }
// console.log(positiveNumber([2,3,4,5,6,-5,-4]))
// _____________________________________________
// #13: Find the maximum number in an array of numbers
// let array = [2,5,10,24,20]
// let max = array[0]
// for(let i=0; i<array.length; i++){ 
//    if(array[i] > max){ 
//     max = array[i]
//    }
// }
// console.log(max)
// _____________________________________________
// #14: Print the first 10 Fibonacci numbers without recursion
// let f0 = 0;
// console.log(f0);

// let f1 = 1;
// console.log(f1)
// for(let i = 2; i < 10; i++)
// {
//     let fi = f1 + f0;
//     console.log(fi);
    
//     f0 = f1;
//     f1 = fi;
// }
// _____________________________________________
// #15: Create a function that will find the nth Fibonacci number using recursion
// function fibonacciNumber(n){ 
//     if(n==0)
//     return 0;

//     if(n==1)
//     return 1; 

//     return fibonacciNumber(n-1) + fibonacciNumber(n-2);    
// }
// let n = fibonacciNumber(4); 
// console.log(n)
// _____________________________________________
// // #16: Create a function that will return a Boolean specifying if a number is prime

// // function isPrime(num){ 
// //     if(num < 2){ 
// //         return false
// //     }
// //     if(num == 2){ 
// //         return true
// //     }

// //     for(let i=2; i<=num; i++){ 
// //         if(num % i == 0){ 
// //             return false
// //         }
// //         return true
// //     }
// // }

// // console.log(isPrime(0))
// // _____________________________________________
// // #17: Calculate the sum of digits of a positive integer number
// // let array = [2,3,-4,5,-4 , -4, 4]
// // let sum = 0

// // for(let i=0; i<array.length; i++){ 
// //     if(array[i] >= 0){ 
// //         let posNum = array[i]
// //         sum+=posNum
// //     }
// // }
// // console.log(sum)
// // ----------------------------

// // let n = 123456789

// // let s = n.toString()
// // let sum = 0
// // for(let char of s){ 
// //     let digit = parseInt(char)
// //     sum = sum+digit
// // }
// // console.log(sum)
// // _____________________________________________
// #18: Print the first 100 prime numbers
// let primes = [];
// let num = 2; // Starting number to check for primes

// while (primes.length < 100) {
//   let isPrime = true;
  
//   for (let i = 2; i <= Math.sqrt(num); i++){
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     primes.push(num);
//   }
//   num++;
// }
// console.log(primes);

// ______________________________

// print fibonnaci number

// var a= 0
// var b= 1
// console.log(a)
// console.log(b)
// for(var i=0; i<=10; i++){ 
//     var temp = a+b // 1+1 // 2  
//     a = b; //1
//     b = temp //1
//     console.log(temp)
// }

// ______________________________

