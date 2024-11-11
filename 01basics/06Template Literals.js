//Template Literals
//Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings. 
//Traditionally, String is created using single quotes (‘) or double quotes (“) quotes. 
//Template literal is created using the backtick (`) character.
const Name="Darshan Deepak";
const Age="26";
const Job="FullStack Developer";
const City="Bengaluru";

let html;

//Without using Template Literals,ES5,we are going to render HTML to Browser with JavaScript.
html='<ul><li>Name:' + Name + '</li><li>Age:' + Age + '</li><li>Job:' + Job + '</li><li>City:' + City + '</li></ul>';

document.body.innerHTML=html;

//using Template Literals
html=`
<ul>
<li>Name:${Name}</li>
<li>Age:${Age}</li>
<li>Job:${Job}</li>
<li>City:${City}</li>
</ul>`;

document.body.innerHTML=html;


//Without Template Literals
//In order to create a multiline string an escape sequence \n was used to give a new line character.
console.log("Java Script is a Scripting language \nUsed in web development");

//With Template Literals
//Template Literals there is no need to add \n string ends only when it gets backtick (`) character.
console.log(`Java Script is a Scripting language
    Used in web development`);
