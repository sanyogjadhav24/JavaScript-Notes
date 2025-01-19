const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@20/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const button=document.querySelector("form button");

const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");

const msg=document.querySelector(".msg")


let i=0;


 for(let select of dropdowns){
    for(currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newOption.selected="selected"
        } else if(select.name==="to" && currcode==="INR"){
            newOption.selected="selected"
        } 
        select.append(newOption);
 
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
 }

 

 const updateFlag=(ele)=>{
let currcode=ele.value;
let contrycode=countryList[currcode];
let newSrc=`https://flagsapi.com/${contrycode}/flat/64.png`;
let img=ele.parentElement.querySelector("img");
img.src=newSrc;
 };



button.addEventListener("click",async (evt)=>{
evt.preventDefault();

let amount=document.querySelector(".amount input");
let amtvalue=amount.value;
if(amtvalue===""||amtvalue<1){
    amtvalue=1;
    amount.value="1";
}

const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;

let response=await fetch(URL);
let data=await response.json();
let rate=data[tocurr.valur.toLowerCase()];

console.log(rate);

let finalamount=amtvalue*rate;
msg.innerText=`${amtvalue}${fromcurr.value}=${finalamount} ${tocurr.value}`;



})