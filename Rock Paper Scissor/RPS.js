let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#Comp-Score");

const msg2=document.querySelector("#msg2");



const msg=document.querySelector("#msg");



msg2.addEventListener("click",()=>{
    console.log("reset clicked");
    userscore=0;
    compscore=0;
    userscorepara.innerText=userscore;
compscorepara.innerText=compscore;
msg.innerText="Play your Move";
msg.style.backgroundColor="#081b31"    
});


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];

  const randidx=Math.floor(Math.random()*3);

  return options[randidx];

}

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        console.log(userscore);
        userscorepara.innerText=userscore;
        console.log("you win!!");
        msg.innerText=`You Win ,Your ${userchoice} beats Computer ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose!!");
        msg.innerText=`You loose ,Computer ${compchoice} beats Your ${userchoice}`;

        msg.style.backgroundColor="red";

    }
}

const draw=()=>{
    console.log("Game was Draw!!");
    msg.innerText="Game was Draw ,Play Again";
    msg.style.backgroundColor="#081b31";


}
const playgame=(userchoice)=>{
    console.log("User Choice =",userchoice);
    //Generate comp choice
    const compchoice=genCompChoice();
    console.log("Comp Choice =",compchoice);

    if(userchoice===compchoice){
        draw();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;

    }else if(userchoice==="paper"){
        userWin=compchoice==="scissor"?false:true;
    }else{
        userWin=compchoice==="rock"?false:true;
    }

    showWinner(userWin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    })
})