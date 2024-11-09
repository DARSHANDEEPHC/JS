//String Concatinatiion
const firstName="Darshan";
const lastName="Deepak";
const str="Hello there my name is Darshan";
const tags="Web development,programming";
let val=firstName+" "+lastName;
console.log(val);

//append
let val1;
val1 = "Manu ";
val1 += "Madhu";
console.log(val1);

val2="Hi,My name is "+firstName+ " and Iam "+"26. " +lastName + " is my Brother.";
console.log(val2);

//Escaping  Escaping allow us to use the single quotes inside the double quotes.
val2="That's awesome,I can't wait.";
console.log(val2);

//Lenght
val3=firstName.length;
console.log(val3);

//concat()
val4=firstName.concat(" ",lastName + val1);
console.log(val4);

//changecase
val5=firstName.toUpperCase();
val5=firstName[3]; //returns the character in 3 index.
console.log(val5);

//indexOf()
val=lastName.indexOf("p");
console.log(val);

//charAt()
val10=lastName.charAt("3")
console.log(val10);

//subString()
val11=firstName.substring(0,4);
console.log(val11);

// slice()
val=firstName.slice(4,7);
console.log(val);

//split()
val2=str.split(" ");
val=tags.split(" , ");
console.log(val2);
console.log(val);

//replace
val=str.replace("Darshan","Deepak");
console.log(val);

//includes()
val=str.includes("foo");
console.log(val);
val1=str.includes("my");
console.log(val1);










