// Hoistig in JavaScript is a phenomina. we can access the functions and variables even before the initialization. 
var x=7;
function getName() {
    console.log("namaste javascript");
}
getName();
console.log(x); //It will print both x & getName the o?p is "namaste javascript" and 7

// POINT 2

getName();  //we are trying to access the getName function before initialization.
console.log(y); //we are trying to access the y value before putting some value to y.

var y=8;
function getName1() {
    console.log("javascript");
}

//  Here we got a o/p of getName function that is "javascript".Because it invoke the function directly.
// But we did't get the y value it gives the o/p as undefined.

//POINT 3

// If we removes var z=8 it will give o/p as "javascript namaste" and z is not defined.
// getName2();
// console.log(z);
// function getName2() {
//     console.log("javascript namste");
// }
  //POINT 4

//   var a=10;
//   function abc() {
//     console.log("React");
//   }
//   console.log(abc);  //It give the O/p as  
//   ƒ abc() {
//   console.log("React");
//  }

//   If we put the console.log(abc) before initialization it gives the O/P as 
//   f abc(){ 
//   console.log("React"); 
//   }



//If we use the Arrow Function it behave like an normal variable.

xyz();
console.log(m);
console.log(xyz);

var p=12;
var xyz = () => {
    console.log("JS React");
}  //It gives the O/P as xyz() is not a function.
    



//To prevent hoisting we can use let and const.