//JS is the dynamically typed language: not need to define datatype

// let fullName="Seedhe Maut";
// console.log(fullName);

// const PI=3.14;
// console.log(PI)
// let x=Symbol("1243236");
// console.log(typeof x)
// console.log(typeof PI)

//object
//in  objects we can update keys of the object until we changed whole collection
// const Student={
//  fullName:"Sanyog Jadhav",
//  age:19,
//  cgps:9.5,
//  isPass:true,

// };

// Student.fullName="Seedhe Maut"
// Student["age"]=Student["age"]+1;
// console.log(Student["fullName"])
// console.log(Student.age)


//Arthematic operator:

// let a=5;
// let b=2;

// console.log(" a + b =",a+b);
// console.log(" a - b =",a-b);
// console.log(" a * b =",a*b);
// console.log(" a / b =",a/b);
// console.log(" a % b =",a%b);
// console.log(" a**b =",a**b);



// unary operators:
// let a=6;

// console.log(" a++=",a++);
// console.log("a=",a);
// console.log("++a=",++a);
// console.log("--a=",--a);
// console.log(" a-- =",a--);
// console.log(" a=",a);

// ===  (number and datatype checking)  !==(number and datatatype checking)

// let b="6";
// console.log(a===b ||a!==b )


//conditional statements:


//let age=25;

// if(age>=18){
//     console.log("you can apply for driving license");
// }
// else{
//     console.log("you cannot apply");
// }


// let mode="light";
// let color;

// if(mode==="dark"){
//     color="black";
// }

// if(mode==="light"){
//     color="white";
// }

// console.log(color);

//else if is also there in js.



//turnery Operator:a?b:c;(compact if-else)
// let age=6;
// let result=age>18?"adult":"notadult"
// console.log(result);

 
//Loops :

// for(let i=1;i<=100000;i++){
//     console.log("They call me Calm"); 

// }

//calculate sum of 1 to n numbers:

// let sum=0;
// let n=prompt("Enter the value of n:")
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);
// console.log("loop has ended");


// for(let i=1;i<=5;i++){
//     console.log("i=",i)
 
// }


//infinite loop:

// for(let i=1;i>=0;i++){
//     console.log("i=",i)
// }

//While loop:

// let i=1;

// while(i<=5){
//     console.log("i=",i);
//     i++;
// }


//do while loop

// let i=1;

// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);


//for-of loop

// let str="SeedheMaut";

// const names=["sanyog","jadhav","seedhemaut","calm","encore","TBSM"]
// for(let i of str){
//     console.log(i);
// }

// let size=0;
// for(let i of names){
//     console.log(i);
//     size++;
// }
// console.log("the length of array is:",size);


// //for-in loop used for objects and arrys:

// const Student={
//     fullName:"sanyog jadhav",
//     age:20,
//     cgpa:8.9,
//     isPass:true
// };

// for(let i in Student){
//     console.log("key=",i,"value=",Student[i]);
// }


//Strings:


// let str="tera bhai seddhe maut"

// console.log(str.length);
// console.log(str[19]);

//Templete literals (string interpolation):


// let sentence=`This is the templete literal`;
// console.log(sentence);


// let obj={
//     item:"pen",
//     price:10,
// };
// let output=`The cost of ${obj.item} is ${obj.price} rupees and ${1+2+3} paise`;
// console.log(output);

// //escape character:
// console.log(" Tera \n bhai \n seedhe \n maut \n \t -encore and calm ");

//methods in string  does not change the original string performs operation on new string:

// let str="sanyog"
// let str1=str.toUpperCase();
// console.log(str.trim());
// console.log(str1.trim());
// console.log(str1.toLowerCase().trim());
// console.log(str.slice(1,4))
// console.log(str.concat(str1));
// console.log(str+str1);
// console.log(str.replace("n","y")) //replace all changes all position of given character

// console.log(str.charAt(0));


// //Arrays:
// // 
// let marks=[90,100,80,95,91];
// console.log(marks)
// console.log(marks.length)

//practice question no .1
// let sum=0;

// for(let i=0;i<marks.length;i++){
// sum=sum+marks[i];

// }

// let average=sum/marks.length;
// console.log(`Average of marks is ${average}`)
//practice question no.2:

// for(let val in marks){
//     console.log(`Before Offer:${marks[val]} `)
// let offer=marks[val]/10;
// marks[val]=marks[val]-offer;
// console.log(`After offer ${marks[val]}`)
// }


// let songs=["humsafar","basti ka hasti","maa baap","tum hi ho","khatta flow"]
// console.log(songs);
// console.log(typeof songs);


// for(let i in songs){
//     console.log(songs[i]);
// }

// for(let i of songs){
//     console.log(i.toUpperCase());
// }
// for(let i=0;i<songs.length;i++){
//     console.log(songs[i])
// }


//methods of arrays:
// songs.push("jeena jeena")
// console.log(songs)
// let poppedele=songs.pop();
// console.log(`the popped element is:${poppedele}`)
// console.log(songs)
// console.log(songs.toString());
// console.log(songs)

// let marvel=["Thor","Spiderman","Ironman"];
// let dc_heros=["Superman","batman"];
// let indian_heros=["Krish","Shaktiman"]
// let Heros=marvel.concat(dc_heros,indian_heros);
// let val=Heros.shift();
// console.log("deleted hero=",val)
// Heros.unshift("antman");
// console.log(Heros);

//slice and splice=used for add,remove and replace 

// let indianher=Heros.slice(5,7);
// console.log(indianher)


// let arr=[1,2,3,4,5,6,7]
// arr.splice(2,2,101,102)
// console.log(arr);
// arr.splice(2,0,103,104)
// console.log(arr)


//Functions:

// function printhell(){
//     console.log("Hello i am console");
// }


// function msgprint(msg,n) //parameters are local variables of the function and alive only in function block 
// {
//     console.log(msg+n);
// }

// msgprint("Hello paramaterize function...",100);//arguments

// function sum(a,b){
//     let s=a+b;
//     return s;
// }

// let r=sum(4,5);
// console.log(r);






//Arrow Function:
// const arrowsum = (a,b) => {
//     console.log(a+b);
// }

// arrowsum(10,20);



// const arrowMul=(a,b)=>{
//     console.log(a*b);

// }
// arrowMul(10,50);


//Practice Question functions:

// function countVowels(str){
//     let count=0;
//     for(let i of str){

//         if(i=="a" || i=="e"||i=="o"||i=="i" ||i=="u"){
//            count++;

//         }
//     }
// console.log(count)
// }

// const arrowcountVowels=(str)=>{
//     let count=0;
//     for(let i of str){

//         if(i=="a" || i=="e"||i=="o"||i=="i" ||i=="u"){
//            count++;

//         }
//     }
// console.log(count)
// }

// arrowcountVowels("sanyog");


//For Each loop for arrays:  higher order function--takes another function as a parameter or return other function as output;

// let arr=[12,3,4,5,6,78,7]

// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);


// })


// arr.forEach(function printval(val,idx,arr){
//     console.log(val.toString(),idx,arr)
// })


// function abc(){
//     console.log("hello");
// }


// function myfunction(abc){
//     return abc;
// }


//Practice Question for each:


// let num=[1,2,3,4,5];

// const calculateSqr=(val)=>{

//     console.log(val*val)

// }

// num.forEach(calculateSqr);


//Important Array metods:

//map- creates the new array work same as forEach

// let newarr=num.map((val)=>{
// console.log(val);
// return val;
// })

// console.log(newarr)

//filter - filter the values of array based on condition makes new array

// let newa=num.filter((val)=>{

//     return val%2==0;//condition.
// });
// console.log(newa);

// let newodd=num.filter((val)=>{

//     return val%2!==0;//condition.
// });
// console.log(newodd);


//reduce array: returns the single value of whole array ex- avg ,sum calculation.

// let sumcal=num.reduce((res,val)=>{
//     return res+val;  //largest no= res>val?res:val;
// })

//console.log(sumcal);



//Dom-document Object Model

// console.dir(document.body.childNodes[1])
// console.dir(document.head)

// console.log(document.body)

//dom Manipulation:

// let header=document.getElementById("heading");//by ID
// console.dir(header);


// let headings=document.getElementsByClassName("header");//by Class 
// console.dir(headings);
// console.log(headings)


//by tag name:

// let para=document.getElementsByTagName("p");

// console.dir(para);


// //Query Selectors:

// let firstelements=document.querySelector("p");
// console.dir(firstelements);

// let Allelements=document.querySelectorAll("p");
// console.dir(Allelements);



// let classelement=document.querySelector(".header");
// console.dir(classelement);

//same for id

// let div=document.getElementById("box");

//  console.log(div.firstChild.nodeName)
//  const myElement = document.getElementById("box");
// for (const child of myElement.children) {
//   console.log(child.tagName);
// }
//HW learn about first child, last child and childern 

// let div=document.querySelector("div");
// console.dir(div);

// let head=document.querySelector("h1");
// console.dir(head);

// let div=document.querySelector("div");
// console.log(div)

// let id=div.getAttribute("id");
// console.log(id);

// let names=div.getAttribute("name");
// console.log(names)

// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newClass"))
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innerText="hello!!";
//div.style.visibility="hidden";


// let newBtn=document.createElement("button");
// newBtn.innerText="Click me!";
//div.prepend(newBtn);
//div.append(newBtn);
//div.before(newBtn);
//div.after(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerText="Hii I am new"
// console.log(newBtn);

// document.querySelector("body").prepend(newHeading);

// para.remove();
// newHeading.remove();

//hW  appendChild  and removeChild learn ...


//Events  in Javascript:


//  let btn=document.querySelector("#btn1");
// btn.onclick=(evt)=>{
//     console.log(evt)
// console.log(evt.type)
// console.log(evt.target);
// console.log(evt.clientX,evt.clientY)
// }

// btn.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler 1");
// })
// btn.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler 2");
   
// })

// const handler3=()=>{
//     console.log("button 1 was clicked handler 3");
   
// };

// btn.addEventListener("click",handler3);
// btn.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler 4");
   
// })


// btn.removeEventListener("click",handler3);

// let box=document.querySelector("div");

// box.onmouseout=(e)=>{
//     console.log(e);
//     console.log("mouse out")
// }


//classes and objects:


//JS object have a special property called prototype

// const student={
//     fullName:"Sanyog Jadhav",
//     marks:99.4,
//     printMarks:function(){
//         console.log("marks= ",this.marks)
//     },
// };

// const employee={
//     calcTax(){
//         console.log("Tax rate is 10%");
//     },
    // calcTax2:function(){
    //     console.log("Tax rate is 10% ");
    // }
// };

// const KaranArjun={
//     salary:50000,
//     calcTax(){
//         console.log("Tax rate is 5%");
//     }
// }

// const KaranArjun2={
//     salary:50000,

// }

// const KaranArjun3={
//     salary:50000,

// }

// const KaranArjun4={
//     salary:50000,

// }

// const KaranArjun5={
//     salary:50000,

// }


// KaranArjun.__proto__=employee;
// KaranArjun2.__proto__=employee;
// KaranArjun3.__proto__=employee;
// KaranArjun4.__proto__=employee;
// KaranArjun5.__proto__=employee;


//classes:basically used for those objects will have some state(varibles) and some behaviour inside it;

// class ToyotaCar{
//     constructor(brand,milage){
//         console.log("Creating new Object...");
//         this.brandName=brand;
//         this.Milage=milage;
//     }

//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop");
//     }

    // setBrand(brand){
    //     this.brandName=brand;
    // }
// }


// let fortuner=new ToyotaCar("Fortuner",10);
// console.log(fortuner)
// let lexus=new ToyotaCar("Lexus",12);
// console.log(lexus)


//Inheritance:

// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }

// class Child extends Parent{

// }


// let obj=new Child();

// console.log(obj.hello());

// class Person{

//     constructor(){
//         this.species="homo sapiens";
//     }
//     work(){
//         console.log("DO Nothing");
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("sleep")
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solve problems,build Something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("Treat Patient");
//     }
// }

// let sanyog=new Engineer();
// let sanny=new Doctor();

//Super: call parent constructor form child:



// class Person{

//     constructor(name){

//         this.species="homo sapiens";
//         this.name=name;

//     }

//     eat(){
//         console.log("Eat");
//     }
   
// }

// class Engineer extends Person{

//     constructor(branch,name){

//         super(name);//Invoke Parent class constructor

//         this.branch=branch;
//     }

//     work(){
//         super.eat();
//         console.log("Solve problems,build Something");
//     }
// }

// let sanyog=new Engineer("Computer Engineer","Sanyog");

//Error Handling:
// let a=10;
// let b=20;
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// try{
// console.log("a+b=",a+c);
// }catch(err){
//     console.log(err);
// }
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);


//Synchronous programming

// console.log("one");
// console.log("two");



//Asynchronous Programming
// 
// setTimeout(()=>{
//     console.log("hello");
// },4000);


// console.log("three");
// console.log("four");

//callback:

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,callbacksum){
//     callbacksum(a,b);

// }

// calculator(10,2,sum);


//  function getData(dataId){

// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId)
//         resolve("success");

//      reject("Error");
       

//     },2000)


// });
//  }


 //promise chain:
//  console.log("Fetching Data1.......")
// getData(1)
//     .then((res)=>{
//         console.log("Fetching Data2.......")
//    return getData(2);
// })
//     .then((res)=>{
//         console.log("Fetching Data3.......")
//     return getData(3);
// })
//     .then((res)=>{
//     console.log(res)
// })


//callback Hell or nested call backs
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

//Promises:-used to tackkel callback hell. (soln for callback Hell)



// let promise =new Promise((resolve,reject)=>{  //three states-pending,fulfield ,reject
//     console.log("I am a promise")
   
//     resolve("success");
// })



// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         //resolve("success");
//        // reject("Network error");
//     });
// };


// let promise=getPromise();

// promise.then((res)=>{//execute only when promis is fullfilled
//     console.log("Promise Fullfilled",res)
// })

// promise.catch((err)=>{//execute only when promise is rejected.
//     console.log("Rejected",err)
// })


// function asyncFun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000)
//     })
// }



// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("Success");
//         },4000)
//     })
// }



// console.log("Fetching Data1.......")
// asyncFun().then((res)=>{
//     console.log(res);
//     console.log("Fetching Data2.......")
//  asyncFun2().then((res)=>{
//     console.log(res);
// })
// })


//Async Await:



// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
      
//       setTimeout(()=>{
//         console.log("Weather data");
//         resolve(200);
//       },2000)
      

//     });
// };

// async function getWeatherData(){
//     await api();
//     await api();
// }


//Async Await:


//  function getData(dataId){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success");
    
//          reject("Error");
           
    
//         },2000)
    
    
//     });
//      }
    

//  async function getAllData(){

//     for(let i=1;i<=5;i++){
//         console.log("getting data",i,"....");
//         await getData(i);
//     }
//     // console.log("getting data 1....");
//     // await getData(1);
//     // await getData(2);
//     // await getData(3);
//  }    


// IIFE: Immediately invoked Function Expression:  execute code wihtout call and immendiately
// (async function(){

//     for(let i=1;i<=5;i++){
//         console.log("getting data",i,"....");
//         await getData(i);
//     }
//     // console.log("getting data 1....");
//     // await getData(1);
//     // await getData(2);
//     // await getData(3);
//  } )();


//Fetch API: provides an interface for fetching (sending/receiving) resources.It uses Request and Response objects.

// https://free-apis.github.io/#/browse  ->api link

const URL="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const button=document.querySelector("#btn");




//AJAX- Asynchronous JS and XML 
//JSON -JAvascript Object Notation.

//json() -return a second promise that resolves with the reult of prasing the resopnse body text as JSON .

// function getFacts(){
//     fetch(URL).then((resopnse)=>{
//         return resopnse.json()
//     }).then((data)=>{
//         console.log(data);
//         factpara.innerText=data[1].text;
//     })
// }


const getFacts = async()=>{
    console.log("getting data....");
    let response=await fetch(URL);
    console.log(response);//JSON Format.
    let data=await response.json();
    factpara.innerText=data[1].text;

}



button.addEventListener("click",getFacts)

//REQUEST & RESPONSE: hw do study at MDN

