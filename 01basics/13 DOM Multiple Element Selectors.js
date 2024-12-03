// Selecting Multiple Elements
//document.getElementsByClassName

const items = document.getElementsByClassName('Sales-table'); // document.getElementsByClassName is used to access the list of classes.
console.log(items);

items[0].style.color="red"; //addimg the color to the list content  The HTML Collection return in the form of array elements so we can add the color & change the text using index.
items[3].textContent="Hello";

//document.getElementsByTagName
const item = document.getElementsByTagName('li'); // document.getElementsByTagName is used to access the tag elements by using their tag names.
console.log(item);
item[3].textContent="Hello List"; //changings the text content and color in particular index of the <li> tag element.
item[3].style.color="Indigo";

//document.querySelectorAll()
const tds = document.querySelectorAll('td.Sales-table');  //gives the o/P in the form of a nodes.so no need to convert them into arrays.
console.log(tds);

tds.forEach (function (td) {
    td.style.color="Orange";
    td.textContent="Hello Table Node";  //changes the text content and color in all the <td> tag elements.
});

//Changing the even and odd position  elements color

const oddElements = document.querySelectorAll('td:nth-child(odd)');
console.log(oddElements);

oddElements.forEach (function (td) {
    td.style.backgroundColor="maroon";
});

const evenElements = document.querySelectorAll('td:nth-child(even)');
console.log(evenElements);

evenElements.forEach (function (td) {
    td.style.backgroundColor="blue";
});
