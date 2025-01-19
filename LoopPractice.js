// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Question no.2

let gamenumber=40;



let usernumber=prompt("Guess the game number:");
 
console.log(usernumber);

while(usernumber!=gamenumber){

    usernumber =prompt("You Enter wrong number Guess the another game number:");
}

console.log("Congratulations you Entered right number!!!!!!")