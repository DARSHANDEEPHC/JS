// DOM Traversing : Selection one DOM Element and travers their children and parent and siblings.

const list = document.querySelector('thead.Sales-table-head');
const list2 = document.querySelector('td.Sales-table');
let val;
//val=list;
val=list2;

//targeting child nodes
val=list.childNodes; //in child node it will calculate the space also.
val=list.children; //in children node it does not calculate space.
//val=list2.children[1].textContent="Darshan"; //Changing the text content of the child node
//val=list.children[2].children; //findinng the child node of the particlar children.
val=list.firstChild; //findinng the first child
val=list.firstElementChild; //findinng the all element of first child
console.log(val);

//targeting parent node 
val=list2.parentNode;
val=list2.parentElement;
val=list2.parentElement.parentElement; //findinng the grand parent element

//siblings children

val=list2.nextSibling; //findinng the next sibling
val=list2.nextElementSibling; //findinng the next sibling element
val=list2.previousSibling; //findinng the previous sibling
val=list2.previousElementSibling; //findinng the previous sibling element

console.log(val);



