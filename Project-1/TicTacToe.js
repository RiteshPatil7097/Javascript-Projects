let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#resetbtn")
let newbtn=document.querySelector("#newbtn")
let msgcontainer =document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turn0= true;

const winPattern =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8] ]

const resetGame = () =>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}    

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0==true)
        {
         console.log("box was clcked")
         box.innerText="X";
         turn0=false;
        }
        else{
            console.log("box was clicked")
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPattern){
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            console.log("Winner "+pos1)
            showWinner(pos1);
       }
    }
}
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner = (Winner) =>{
    msg.innerText=` Congrats winner is: ${Winner}`;
    msg.style.fontSize='40px';
    msgcontainer.classList.remove('hide');
    disableBoxes();
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);





// boxes.forEach((box) =>{
//     box.addEventListener("click",()=>{
//         if(turn0){

//         }
//     })
// })

// console.log(pattern[0] ,pattern[1] ,pattern[2] );
// console.log(boxes[pattern[0]].innerText,
//     boxes[pattern[1]].innerText ,
//     boxes[pattern[2]].innerText);