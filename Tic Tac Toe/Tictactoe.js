let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#resetbtn");

let turnO = true;

let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () => {
    turnO = true;
    Enableboxes();
    msgcontainer.classList.add("hide");
    clearBoxes();
}

const clearBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;

            checkWinner();
        }
    });
});

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const Enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
                return;
            }
        }
    }

    let isTie = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isTie = false;
        }
    });

    if (isTie) {
        msg.innerText = "It's a Tie!";
        msgcontainer.classList.remove("hide");
    }
};

newGamebtn.addEventListener("click", resetgame);
reset_btn.addEventListener("click", resetgame);
