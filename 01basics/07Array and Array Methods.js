//Creating sample Array
const number=[91,12,23,4,45]; //integer array.
const num= new Array(45,12,78,2,0,99); //creating a constructor using new keyword.
const alphabets=["d","e","e","p","a","k"]; //string array.
const alldatatypes=[25,"Darshan",true,null,undefined]; //creating array using all kinds of data types in JavaScript.

console.log(number);
console.log(num);
console.log(alphabets);
console.log(alldatatypes);

let val; //declaring the variable let 

//Get the array length
val=number.length;
console.log(val);

//check if it is an array
val=Array.isArray(alphabets);
console.log(val);

//get a single value
val=number[2]; //here we use square bracket to get the single value in the array.
console.log(val);

//find the index value
val=number.indexOf(23);
console.log(val);

//Mutating the array
//Add a number to the end of an array
val=number.push(111);
console.log(number);

//Add a number to the statring of an array
val=number.unshift(222);
console.log(number);

//remove the last number from array
val=number.pop();
console.log(val);

//remove the first number from array
val=number.shift();
console.log(val);

//reverse the array
val=number.reverse();
console.log(val);

//sort
val=alphabets.sort();
console.log(val);

//sort using function in ascending order
val=number.sort(function(x,y)
{
    return x-y;
});
console.log(val);

//sort using function in descending order
val=number.sort(function(x,y)
{
    return y-x;
});
console.log(val);


//splicing  splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index. 
val=num.splice(1,4);
console.log(val);











