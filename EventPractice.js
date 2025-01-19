let btn=document.querySelector("#mode");

let body= document.querySelector("body");
let currmode= "light";

let para=document.querySelector("p");



btn.addEventListener("click",()=>{
 
    if(currmode==="light"){
        currmode="dark"
       body.classList.add("dark");
       para.innerText="mode Changed to dark"

       body.classList.remove("light");

     }
    else{
        currmode="light"
        body.classList.add("light"); 
        para.innerText="mode Changed to light"

        body.classList.remove("dark");


    }
    console.log(currmode);

});