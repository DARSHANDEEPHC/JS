//When a webpage is loaded browser creates DOM of the page.
//Websites are made up of HTML and/or XML documents. These documents are static, they do not change. 
//The Document Object Model (DOM) is a programming interface implemented by browsers to make static websites functional. 
//The DOM API can be used to change the document structure, style, and content. 
//To print object we use console.dir(window.document)
// single element selector
// document.getElementById 
// selecting a single element from HTML and changing or updating that HTML element in JavaScript.

let val;  //Declaring one variable
val=document;  //It shows the document in the console.
val=document.all; //It shows all the html documents used in the html file.
val=document.all[0]; //It will displays the 1st content of the document.
val=document.all.length; //It will displays the length of the document.
val=document.head;  ////It will displays the head of the document.
val=document.body; //It will displays the body of the document.
val=document.doctype;  //It will displays the type of the document.
val=document.URL;
val=document.domain;
val=document.characterSet; //It shows which kind of charset is used like (UTF).
val=document.forms;
val=document.forms[0];
//val=document.table.id;
val=document.links;

//console.log(val);

console.log(document.getElementsByClassName("task"));
//console.log(document.getElementById("task-title").id); //geting the element from html to JS using getElementById() method
console.log(document.getElementById("task-title").className);

//change style

const taskTitle= document.getElementsById("navbar-title");
taskTitle.style.backgroundColor='red';
taskTitle.style.color='green';
taskTitle.style.color='5px';

//Text content

taskTitle.textContent= "Darshan"; //we are using textContent & innerText to change the text that in HTML
taskTitle.innerText= "DarshanDeep";
taskTitle.innerHTML= '<span style=color:blue>Da</span>'; //innerHTML is used to append the HTML


//document.querySelector in this selector we can select multiple elements

console.log(document.querySelector("#item-table")); //to access the id in query selector use # symbol accessing id
console.log(document.querySelector(".Items")); // to access the class in query selector use . symbol accesing class
console.log(document.querySelector("h1")); //accessing the header in query selector
document.querySelector("li").style.color="red"; // coloring the list element
document.querySelector("li.last-child").style.color="Blue";  //coloring the last list element
document.querySelector("li.nth-child").style.color="maroon";  //coloring the middle list element

