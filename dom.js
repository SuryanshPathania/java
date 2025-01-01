//for appending values in already made id element
document.querySelector("#welcome").innerText  +="Hello worls";

// Q Create a new element give it a text click me background color of reds and text color of white
//Insert the button as the first element inside body tag

let newElement = document.createElement("button");
newElement.innerText="Click me";
newElement.style.backgroundColor = "red";
newElement.style.color = "white"
document.body.prepend(newElement);

//document.querySelector("body").prepend(newElement) does same work but with help of css selector



// Q  Create A <P>  tag in HTML give it a class and some styling now create a new class in Css and try to append this class to the <P> element
// Did you notice how you override the class name when you add a new one solve the problem using class list


// let para = document.querySelector("p");
// para.getAttribute("class" );
// para.setAttribute("class" , "newClass");


let para = document.querySelector("p");
console.log(para.classList);
para.classList.add("newClass"); // does'nt overwrite keeps the old atrribute and new too