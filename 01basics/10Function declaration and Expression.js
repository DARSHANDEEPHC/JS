//In function declaration "function" keyword is mandatory for declaration we can call the function n number of timess if we want.

//function declaration
function greet() //declaring the function.
{
    console.log("hi");
    
}
greet()  //calling the function greet() to go get the o/p.we can call the function greet() multiple times it will gave same o/p.

//Another method
function greeting()
{
    return "Good Mornning";
}
console.log(greeting());  //here we are calling the greeting() function in console.log to print the return statement.

//
function greetings(firstName)
{
    return `Hello ${firstName}`
}
console.log(greetings("Darshan"));


function greetings(firstName="Deepak")
{
    return `Hello ${firstName}`
}
console.log(greetings());

//function expression
const mul=function() //assigning  the function to the variable.
{
    return "How are you"
}
console.log(mul()); 

//mult
const multiplication=function(a) //First we are declaring the variabl "const" for that variable we are declaring the function().
{
    return a*a;

}
console.log(multiplication(5));

//To find the given number is even or not
function isEven(num)
{
    return num % 2==0
}
console.log(isEven(24));//give o/p as true
console.log(isEven(11));//give o/p as false

//factorial 
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(4)); // => 24

const multi=function(a,b)
{
    return a*b;

}
console.log(multi(5,2));


//IIFE-- Immediately Invokable Function Expression.

(function()
{
    console.log("IIFE ran...");
    
})();

//
(function(name)
{
    console.log(`${name} ran...`);
    
})("Darshan");

//Declaring the function inside the object

const person={
    getBirthday:function()
    {
        return "26 jan 1998";
        
    }
}
console.log(person.getBirthday());

//
const person1={
    getBirthday:function(day)
    {
        return `January ${day}`;
        
    },
}
console.log(person1.getBirthday(26));
