// // let c = 12;
// // let d = 23;

// // let age =26;
// // //  let variable means container which can change future
// // // constant will  
// // let name = "Raees";
// // console.log('age',age);
// //  age= 28;


// // console.log("c+d is ",c+d);
// // console.log('age',age);
// // console.log('name',name);
// // console.log(c + d);

// // let a=23;
// // console.log('the value of a',age);

// // //** */ types of data types
// // -String 
// // -Number
// // -Boolean
// // -undefined
// // -Object


// // lecture 2 Anuj
// // let a =2;
// // a ='Name'
// // a= false 
// // console.log('the value of a is',a);
// // console.log('the type of a is ',typeof(a));


// //type conversion in javascript
// let a=23;
// a='23';
// a= Boolean(a);
// console.log('the value of a is',a);
// console.log('the type of a is ',typeof(a));
// // HTML adds Structure to a web page, CSS styles it and JavaScript brings
// //  it to life by allowing users to interact with elements on the page,
// //  such as actions on clicking buttons, filling out forms, and showing
// //  animations

// //operator

// const x = 3;
// const y = 4;

// const z =  x+ y;
// console.log (z);

// let firstname = 4;
// let lastname = 5;
// let result =(firstname&&lastname)

// console.log(result);

// //conditional operator

// let number = 2;
// if(number >= 0){
//     //code
//     console.log(number)

// }
// else{
//     //code
//     console.log(number)

// }
// //code after if 
// if(number < 0 ){
//     console.log(number*4);
// }

// else{
//     console.log(number/2);
// }

// //ternary operator 
// // a ternary operator evaluates a condition and executes a block of code based on the condition.

// // for(let i=0; i<=100;i++){
// //     console.log(i);
// // }

// //mao

// // const m = new Map();
// // // hello brother 
// // m.set('name', 'GFG');
// // m.set('Rank', 1);
// // console.log(m.size); 


// //switch statement
// // hte javascript switch statement is used in decision making .the swith
// // evaluates an expression and executes the corresponding body that matches the expression's result.

// let grade = 2

// switch(grade){
//     case 1:
//         console.log("hello");
//         break;
//     case 2:
//         console.log("brother");
//         break;
//     case 3:
//         console.log("good morning");
//         break;
//     default:
//         console.log("all done");
//         break;

// }


// for loop 

// for (let i = 0; i <= 5; i++) {
//   console.log("Raees", i);

// }
// let step = 0;
// while (step < 5) {

//   console.log("sarwar", step);
//   step += 1;
// }


//do while loop

// let way = 0;
// do {


//   // if(way===2){
//   //     continue;

//   // }
//   console.log('way', way);
//   way += 1;

// } while (way < 5);


/// array 
// an array is an object that can store multiple values at once.

// const words = ["apple", "banana", "cherry", 12, true, { name: "Anuj", }, function hello() { console.log("hellow world"); }];
// console.log(words[6]);
// // give me

// console.log(words.length)
// //  const newwords = words;
// //   newwords[2]= "pimeapple";

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }


//function 
// let a=12;
// let  b=15;
// sum(a,b);

// function sum (a,b){
//    let sum=a+b;
//    console.log(sum); 

// }
// a function expession is very simila to and has almost the same syntax
// as a function declaration .the main difference between a function and a f
//function declaration is the function name,which can be omitted in function
// expression to create anonymous funciton.


//Nested funciton 
// function addSquares(a,b){
//     function square(x){
//         return  x*x;
//     }
//     return square(a)+square(b);
// }
// const a = addSquares(2,3);//return 13
// const b = addSquares(3,4);//return 25
// console.log(a);
// console.log(b);


// //promise
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("demo").innerHTML = "Hello JavaScript";
// });

// const a = 12;
// const b = 4;
// sum(a, b);


// const c = 2;
// const d = 24;
// sum(c, d);

// const e = 5;
// const f = 14;
// sum(e, f);

// function sum(a, b) {
//   const sum = a + b;
//   console.log("result", sum);
// }


//function expression
// let num= 4;
// const square = function (num) {
//   return num * num;
// };
// console.log(square(6));


// //Nested Function 

// function addSquares(a, b) {
//   const sa = square(a);
//   const sb = square(b);
//   function square(num) {
//     return num + num;
//   }
//   return sa + sb;
// }
// console.log(addSquares(3, 4));



//ADVANCE FUNCTION   ES9 VERSION FEATURE OF JAVASCRIPT
// How to find a call back function 
// it allows you to create function in  a cleaner way compared to regular 
// function .Here are some of the valid syntax for arrow function:

// function greet() {
//   console.log("hello world greet");
// }

// greet();

//
// const greet = (count) => {
//   for (let i = 0; i < count; i++) console.log("hellow brother");
    
// };
// // const variable = {} => {

// // }
// // variable();

// greet(3);


// sqare

// const square = (num) => num*num;
// console.log (square(3));


// call back function 

// A callback is a function passed as an argument to another function.


function greet(name , callback){
  console.log('hii'+ '' +name);
  callback();
}

function callMe(){
  console.log(' I am callback function');
}
greet('Peter',callMe);


// call back addition 

const calculate = (a,b,operation) => {
  return operation(a,b);
};

//method 1

const addition = calculate(3,4,function(num1,num2) {
  return num1 + num2;
});
console.log(addition);

//method 2

const subtraction  = (a,b) => a+b;

const subResult  = calculate(8,3,subtraction);

console.log(subResult);