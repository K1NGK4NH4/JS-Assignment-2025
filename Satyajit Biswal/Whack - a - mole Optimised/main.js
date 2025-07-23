// let gameoverAudio=new Audio("gameover.mp3");
// let music = new Audio("music.mp3")

let mole = document.createElement("img");
mole.src = "./mole.png";
mole.className = "mole";

let jerry = document.createElement("img");
jerry.src = "./Jerry.png";
jerry.className = "mole";

let snake = document.createElement("img");
snake.src = "./snake.png";
snake.className = "mole";

let cactus = document.createElement("img");
cactus.src = "./cactus.png";
cactus.className = "cactus";


let scorecard = document.querySelector(".score");
let score = 0;
scorecard.innerHTML = `Your Score: ${score}`;
let isgameover = false;


function randommole() {
    let randomIdw = Math.floor((Math.random() * 9) + 1);
    return randomIdw.toString()
}

function randomcactus() {
    let randomIdl = Math.floor((Math.random() * 9) + 1);
    return randomIdl.toString()
}

function randomjerry() {
    let randomIdj = Math.floor((Math.random() * 9) + 1);
    return randomIdj.toString()
}

function randomsnake() {
    let randomIds = Math.floor((Math.random() * 9) + 1);
    return randomIds.toString()
}


let isactivatespikebat=true;
function spikebat() {
    let randombox = document.querySelectorAll(".box");
    randombox.forEach(box => {
        box.onclick = (e) => {
            if (!isactivatespikebat) {
                alert("You can use spikebat after reload time")
                return;
            }
            if (isgameover) return;
            let targetid = e.currentTarget.id
            if (targetid == cactus.parentNode.id) {
                return gameover();
            }
            else{
                if (targetid == mole.parentNode.id) {
                     box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 10;
            }
            else if (targetid == jerry.parentNode.id) {
                 box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 20;
            }
            }
            scorecard.innerHTML = `Your Score: ${score}`;
             isactivatespikebat = false;
            setTimeout(() => {
                isactivatespikebat = true;
            }, 2000)
        }
    }
    )
}

let isactivatehammer=true;
function hammer() {
    let randombox = document.querySelectorAll(".box");
    randombox.forEach(box => {
        box.onclick = (e) => {
            if (!isactivatehammer) {
                alert("You can use hammer after reload time")
                return;
            }
            if (isgameover) return;
            let targetid = e.currentTarget.id
            if (targetid == cactus.parentNode.id) {
                return gameover();
            }
            else{
                 if (targetid == mole.parentNode.id) {
                     box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 10;
                scorecard.innerHTML = `Your Score: ${score}`;

            }
            }
             isactivatehammer = false;
            setTimeout(() => {
                isactivatehammer = true;
            }, 300)
        }
    }
    )
}


let isactivateelectric=true;
function electricstick() {
    let randombox = document.querySelectorAll(".box");
    randombox.forEach(box => {
        box.onclick = null;
        box.onclick = (e) => {
            if (!isactivateelectric) {
                alert("You can use electric after reload time")
                return;
            }
            if (isgameover) return;
            let targetid = e.currentTarget.id
            if (targetid == cactus.parentNode.id) {
                return gameover();

            }
            else{
                 if (targetid === mole.parentNode.id) {
                     box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 10;
                scorecard.innerHTML = `Your Score: ${score}`;
            }
            else if (targetid === jerry.parentNode.id) {
                 box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 20;
                scorecard.innerHTML = `Your Score: ${score}`;
            }
            else {
                 box.style.backgroundColor='red'
                 setTimeout(() => {
                        box.style.backgroundColor = '';
                    }, 200);
                score += 30;
                scorecard.innerHTML = `Your Score: ${score}`;
            }
            }
             isactivateelectric = false;
            setTimeout(() => {
                isactivateelectric = true;
            }, 3000)

        }
    }
    )
}

// function laser(){

// }
let isactivatebomb = true;

function bomb() {
    let randombox = document.querySelectorAll(".box");
    randombox.forEach(box => {
        box.onclick = () => {
            document.querySelectorAll(".box").forEach((e)=>{
                 e.style.backgroundColor='red'
                 setTimeout(() => {
                        e.style.backgroundColor = '';
                    }, 200);
            })
            if (!isactivatebomb) {
                alert("You can use laser after reload time")
                return;
            }
            if (cactus.parentNode) {
                gameover();
            }
            else {
                if (mole.parentNode) {
                    if (!isgameover) {
                        score = score + 10;
                        scorecard.innerHTML = `Your Score: ${score}`;
                    }
                }
                if (jerry.parentNode) {
                    if (!isgameover) {   
                        score = score + 20;
                        scorecard.innerHTML = `Your Score: ${score}`;
                    }
                }
                if (snake.parentNode) {
                    if (!isgameover) {
                        score = score + 30;
                        scorecard.innerHTML = `Your Score: ${score}`;
                    }
                }
            }
            isactivatebomb = false;
            setTimeout(() => {
                isactivatebomb = true;
            }, 5000)
        };
    });
}

let isactivatelaser = true;

function laser() {
    document.querySelectorAll(".box").forEach(box => {
        box.onclick = e => {
            if (!isactivatelaser) {
                alert("You can use laser after reload time")
                return;
            }
            if (isgameover) return;
            const clickedBoxId = Number(e.currentTarget.id);
            const rowIndex = Math.floor((clickedBoxId - 1) / 3);
            const rowIds = [1, 2, 3].map(i => rowIndex * 3 + i);
            if (rowIds.includes(Number(cactus.parentNode?.id))) {
                document.querySelectorAll(".box").forEach((e)=>{
                if(rowIds.includes(Number(e.id))){
                     e.style.backgroundColor='red'
                 setTimeout(() => {
                        e.style.backgroundColor = '';
                    }, 200);
                }
            })
                return gameover();
            }

            if (rowIds.includes(Number(mole.parentNode?.id))) {
                 document.querySelectorAll(".box").forEach((e)=>{
                if(rowIds.includes(Number(e.id))){
                     e.style.backgroundColor='red'
                 setTimeout(() => {
                        e.style.backgroundColor = '';
                    }, 200);
                }
            })
                score += 10;
            }
            if (rowIds.includes(Number(jerry.parentNode?.id))) {
                 document.querySelectorAll(".box").forEach((e)=>{
                if(rowIds.includes(Number(e.id))){
                     e.style.backgroundColor='red'
                 setTimeout(() => {
                        e.style.backgroundColor = '';
                    }, 200);
                }
            }) 
                score += 20;
            }
            if (rowIds.includes(Number(snake.parentNode?.id))) {
                 document.querySelectorAll(".box").forEach((e)=>{
                if(rowIds.includes(Number(e.id))){
                     e.style.backgroundColor='red'
                 setTimeout(() => {
                        e.style.backgroundColor = '';
                    }, 200);
                }
            })
                score += 30;
            }

            scorecard.innerHTML = `Your Score: ${score}`;

            isactivatelaser = false;
            setTimeout(() => {
                isactivatelaser = true;
            }, 5000)
        };
    });
}


let weapons = document.querySelectorAll("input[name='weapon']");
function getSelectedWeapon() {
    let selected = document.querySelector("input[name='weapon']:checked");
    return selected ? selected.value : null;
}
function onWeaponChange() {
    let weapon = getSelectedWeapon() || "hammer";
    //   document.querySelectorAll(".box").forEach(box => box.onclick = null);
    if (weapon == "spikebat") {
        spikebat()
    }
    else if (weapon == "electricstick") {
        electricstick()
    }
    else if (weapon == "bomb") {
        bomb()
    }
    else if (weapon == "laser") {
        laser()
    }
    else {
        hammer()
    }
}

document.querySelectorAll("input[name='weapon']").forEach(radio => {
    radio.addEventListener("change", onWeaponChange)
});

window.addEventListener("DOMContentLoaded", onWeaponChange);

function game(event) {
    if (isgameover) {
        return;
    }
    // music.play();
    if (mole.parentNode) mole.parentNode.removeChild(mole);
    if (cactus.parentNode) cactus.parentNode.removeChild(cactus);
    if (jerry.parentNode) jerry.parentNode.removeChild(jerry);
    if (snake.parentNode) snake.parentNode.removeChild(snake);

    let a = (Math.floor((Math.random() * 9) + 1));
    let b = (Math.floor((Math.random() * 9) + 1));
    let c = (Math.floor((Math.random() * 9) + 1));
    let d = (Math.floor((Math.random() * 9) + 1));

    //  console.log(a,b,c,d)

    boxa = document.getElementById(`${a.toString()}`);
    boxb = document.getElementById(`${b.toString()}`);
    boxc = document.getElementById(`${c.toString()}`);
    boxd = document.getElementById(`${d.toString()}`);

    boxa.append(mole);
    if (!(boxb.hasChildNodes())) {
        boxb.append(jerry);
    }
    if (!(boxc.hasChildNodes())) {
        boxc.append(cactus);
    }
    if (!(boxd.hasChildNodes())) {
        boxd.append(snake);
    }

}

//Game over Option
let gameInterval = setInterval(game, 2000);


function gameover() {
    isgameover = true;
    clearInterval(gameInterval);
    document.querySelector(".gameover").innerText =
        "Game Over!!! Start on clicking Reset button";
}




//Level change option
let radio = document.querySelectorAll("input[name='levels']")

function onModeChange(event) {
    clearInterval(gameInterval);

    let x = event.target.value
    if (x == "hard") {
        gameInterval = setInterval(game, 500);
        console.log("its hard")
    }
    else if (x == "medium") {
        gameInterval = setInterval(game, 1000);
    }
    else {
        gameInterval = setInterval(game, 1500);
    }

}




//highscore
let highscore
let highscorecard = document.querySelector('.highscore')
if (localStorage.getItem("highscore")) {
    highscore = localStorage.getItem("highscore");
    highscorecard.innerHTML = `Highscore: ${highscore}`;
}
else {
    highscore = 0;
    localStorage.setItem("highscore", 0)
    highscorecard.innerHTML = `Highscore: ${highscore}`;
}




//Reset button
resetbtn = document.querySelector('.reset-btn');
resetbtn.addEventListener('click', () => {
    if (score > highscore) {
        highscore = score
        localStorage.setItem("highscore", highscore)
        highscorecard.innerHTML = `Highscore:${highscore}`;
    }
    score = 0
    scorecard.innerHTML = `Your Score: 0`;
    document.querySelector(".gameover").innerText = "";
    isgameover = false;
    gameInterval = setInterval(game, 1500);


    const checked = document.querySelector('input[name="level"]:checked');
    if (checked) onModeChange({ target: checked });
})

