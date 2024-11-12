let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let count = 0;
// let player1 = prompt("Suggess A Name for yourself:")
// let player2 = prompt("Suggess A Name for yourself:")

let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],   
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked")
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            showTie();
        }
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () =>{
     for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
     }   
}
const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showTie = () =>{
    msg.innerText = `Game has drawn`
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winpattern){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                console.log(pos1val)
                showWinner(pos1val);
                return true;
            }
            
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);