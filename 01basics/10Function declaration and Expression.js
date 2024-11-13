//In function declaration "function" keyword is mandatory for declaration we can call the function n number of timess if we want.

//function declaration
function greet()
{
    console.log("hi");
    
}
greet()  //calling the function greet() to go get the o/p.we can call multiple times it will gave same o/p.

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
const mul=function() //First we are declaring the variabl "const" for that variable we are declaring the function().
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