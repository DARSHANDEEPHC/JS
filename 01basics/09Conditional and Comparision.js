//Conditional & Comparision in JS
// Assignment operator
//equal to
const id=100;
if(id==100)
{
    console.log("true");
    
}
else{
    console.log("false");
    
}

//Not equal to

const id1=200;
if(id1!=100)
{
    console.log("true");
    
}
else{
    console.log("false");
    
}

//Equal to value and type

const id2="200";  //here it will comapre the value as welle as datatype.
if(id2===200)
{
    console.log("true"); 
    
}
else{
    console.log("false");
    
}

const id3=100;   //here it will print id3 value but we want to print else part so that we use typeof id3="undefined" .
//if(id)
if(typeof id3!=="undefined") //if(typeof id3!=="undefined") it returns id3 value 100. if(typeof id3=="undefined") it returns No ID.
{
    console.log(id3);
    
}
else{
    console.log("No Id");
    
}

// comparision using greter than operator
const id4=500;
if(id4>600)
{
    console.log("High");
    
}
else{
    console.log("Low");
    
}

//if else
const color='black';
if(color=='red')
{
    console.log("color is red");
    
}
else if(color=='blue')
{
    console.log("color is blue");

}
else 
{
    console.log("Other color");
    
}

//Logical Operators && and ||

const age=26;
if(age>0 && age<10)
{
    console.log("Child");
    
}
else if(age>10 && age<20)
{
    console.log("Teen");
    
}
else{
    console.log("Adult");
    
}

const age1=18;
if(age1>18 || age1<100)
{
    console.log("Eligibel to vote");
    
}
else{
    console.log("Not Eligible")
}