//Below are the variables of JavaScript
//const,let,var

const accountId=122534
let accountEmail="darshan@gmail.com"
var accountPassword="123123"
accountCity="Bangalore"
let accountState
/*
prefer not to use var because of issue in block scope and functional scope
console.log(accountId) is used to print the statement
but console.table([]) is used to print multiple statement at a time in table format
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//Const : 1=> Const is keyword to declare a variable when you do not want to change the value of that variable for the whole program.
        //2= Variable define using const keyword cannot be reassigned, or its value cannot be changed.
        //3= It is not block scope, it is function scope.



// let : The let keyword in JavaScript is used to make variables that are scoped to the block they’re declared in. 
// Once you’ve used let to define a variable, you cannot declare it again within the same block. 
// It’s important to declare let variables before using them.
    
    //A global scope variable is a variable declared in the main body of the source code, outside all functions.

// Example: In this example, the num variable is a globally scoped variable and it can be accessed from anywhere in the program.

    // let num = 10;
// console.log(num);
// function fun() {
//     console.log(num);
// }

// fun(); // Calling the function


// var : var keyword in JavaScript is used to declare variables that are scoped to the function they’re declared in.
