// let heading=document.querySelector("h2");
// console.dir(heading.innerText);

// heading.innerText=heading.innerText+" from Apna College Students";//concatenate.

// console.log(heading.innerText)

// let divs=document.querySelectorAll(".box");
// console.dir(divs)
// let idx=1;
// for(let div of divs){
//     div.innerText=`new Unique Value ${idx}`;
//     idx++;
// }


//Practice Question 1:

let newBtn=document.createElement("button");
newBtn.innerText="Click Me!!!";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);

//Question 2:

let para=document.querySelector("p");
para.getAttribute("class");
//solving using class list:

para.classList.add("newClass");