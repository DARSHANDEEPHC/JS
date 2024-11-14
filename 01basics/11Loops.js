//for loop
 
for(let i=0;i<10;i++)
    {
       console.log("Hi");
       
    }


for(let i=0;i<10;i++)
    {
       console.log(`Hi ${i}`);
       
    }

    //array through for loop
const names=["Darshan","Deepak","Rachana","Chandrakala","Chandrappa"]
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
    
}

//for of loop   

const name=["Darshan","Deepak","Rachana"]
for(d of name)      //
{
    console.log(d);
    
}

//while loop
let i=0;
while (i<10) 
{
 console.log(i);
 i++;
    
}

//do while
let j=0;
do{
    j++;
    console.log(j);
    
}
while(j<5);

//for in loop
const person={firstName:"Darshan",age:26};
for(x in person)
{
    console.log(person[x]);
    
}