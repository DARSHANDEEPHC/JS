//Object Literals
// If we want to create a object in JS we use curly{} braces inside that {} we can create.

const person={
    firstName:"Darshan",
    age:"26"
}
console.log(person.firstName);  //If we want to access the object methods or object properties we use dot(.) symbol.s
console.log(person.age);   

//Instead of creatig multiple console we declare one variable and assign the object to that variale.

const person1={
    firstName:"Deepak",
    age:"24",
    address:"Hulikere",
    hobbies:["eat","cycling","painting"],
};
let val;
val=person1;
console.log(val);
console.log(val.firstName);
console.log(val.age);
console.log(val.address);
console.log(val.hobbies);
console.log(val.hobbies[2]); //print the particular value in an array using index.

//Creating multiple object parent & Child object.

const person2={
    firstName:"Deepak",
    age:"24",
    hobbies:["eat","cycling","painting"],
    emai:"deepak18@gmail.com",
    address:{                      //child Object
        City:"Chikmagalur",
        State:"Karnataka"
    },

    getBirthYear:function()    //method,if any function present inside the object is known as method 
    {
       // return 2000;  //returning the age dicect 
        return 2001 - this.age; //Here return the birthyear in a dynamic manner by using this keyword.
    }                           //this keyword is used access or call the object form parent to child.
   
};

let val1;
val1=person2;
console.log(val1.address.City);
console.log(val1.address.State);
console.log(val1.getBirthYear()); //when we are calling the function we have to provide the paranthesis(). 

//Array of Object

const people=[{firstName:"Darshan",age:26},{firstName:"Deepu",age:25}];
console.log(people);
console.log(people[0]);
console.log(people[1].firstName);


//using for loop
const people1=[{firstName:"Chandra",age:46},{firstName:"kala",age:25}];
for(let i=0;i<people1.length;i++)
    { 
        console.log(people1[i].firstName);
        console.log(people1[i].age);
        

    }
   
    



