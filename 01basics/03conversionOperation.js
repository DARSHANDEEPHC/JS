//Converting Number to String 

let number =1 //number
console.log(number); //print the number
console.log(typeof number); //print the type of datatype
console.log(number.length); //print the length of the value

//Converting
let num=String(1+13) //convrting number into string ny using String datatype
console.log(num);
console.log(num.length);
console.log(typeof num);


let str="darshan"
console.log(str);
console.log(typeof str);
console.log(str.length);

let m=true
let n=Boolean(12)
console.log(m);
//console.log(n);
console.log(typeof n,m);

//using toString()
 val =(5).toString();
 valu=true.toString();
 console.log(typeof valu);
 console.log(val);
 console.log(typeof val);

//Boolean to string
val=String(true);
console.log(typeof val);

//Date to String
val= String(new Date());
console.log(val);
console.log(typeof val);

//Array to String
val=String([1,2,3,4]);
console.log(val);
console.log(typeof val);

//string to Number

val=Number("2");
console.log(val.toFixed(3)); //toFixed() method is used to add the decimal after a number //toFixed() can't used with val=2;
console.log(typeof val);

//parseInt is a another method of number. like we use toString method in String
val=parseInt("5");
console.log(typeof val);

//Type Coehesion

const val1=1;
const val2=2;
const val3="3"
const sum=val1+val2+val3;
console.log(sum);
console.log(typeof sum);















