let boxes=document.querySelectorAll(".box");
let resetbt=document.querySelector("#reset");
let msgCont=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let newbt=document.querySelector("#newgame");

let turnX=true;
let count=0;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.classList.contains("color");
            box.innerText="X";
            turnX=false;
        } else{
            box.classList.remove("color");
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    });
});

const resetgame = () =>{
    turnX=true;
    count=0;
    enablebox();
}
const disablebox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox = () =>{
    msgCont.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const winner = (win) =>{
    if(win==="X"){
        msg.innerText=`Congratulation!, Winner is Player 1`;
    }else{
        msg.innerText=`Congratulation!, Winner is Player 2`;
    }
    msgCont.classList.remove("hide");
    disablebox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner!");
                winner(pos1);
            }
        }
    }
    if(count===9){
        msg.innerText=`Tied!`;
        msgCont.classList.remove("hide");
        disablebox();
    }
};

newbt.addEventListener("click",resetgame);
resetbt.addEventListener("click",resetgame);