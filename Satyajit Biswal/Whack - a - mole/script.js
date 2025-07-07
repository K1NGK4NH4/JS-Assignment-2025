let gameoverAudio=new Audio("gameover.mp3");
let music = new Audio("music.mp3")


let mole= document.createElement("img");
mole.src="./mole.png";
mole.className="mole";

let cactus=document.createElement("img");
cactus.src="./cactus.png";
cactus.className="cactus";


let scorecard=document.querySelector(".score");
let score=0;
scorecard.innerHTML=`Your Score: ${score}`;
let isgameover=false;

function updateScore(){
    score =score+10;
    console.log("Mole clicked");
    scorecard.innerHTML=`Your Score: ${score}`;
}


function randommole(){
    let randomIdw=Math.floor((Math.random()*9)+1);
    return randomIdw.toString()
}

function randomcactus(){
    let randomIdl=Math.floor((Math.random()*9)+1);
    return randomIdl.toString()
}


//Main game 
function game(){
    if(isgameover) {
        return;
    }
    music.play();
     if (mole.parentNode)   mole.parentNode.removeChild(mole);
     if (cactus.parentNode) cactus.parentNode.removeChild(cactus);
    
    let random1=randommole();
    boxw=document.getElementById(`${random1}`);

    let random2=randomcactus();
    boxl=document.getElementById(`${random2}`);
   
    if(random1 !== random2){
        boxw.append(mole);
        mole.onclick = () => {
            if(!isgameover){
            updateScore(score);
            }
        };
        boxl.append(cactus);
        cactus.onclick=()=>{
            gameover();
        }
    }
    else{
        boxw.append(mole);
        mole.onclick = () => {
             if(!isgameover){
            updateScore(score);
            }
        };
    }
}



//Game over Option
let gameInterval = setInterval(game, 2000);

function gameover(){
     isgameover = true;
    clearInterval(gameInterval);
    document.querySelector(".gameover").innerText =
    "Game Over!!! Start on clicking Reset button";
  music.pause();
  gameoverAudio.play();
}


//Level change option
let radio=document.querySelectorAll('input[type="radio"]')


function onModeChange(event){
    clearInterval(gameInterval);

    let x=event.target.value
    if(x=="hard"){
        gameInterval = setInterval(game, 500);
        console.log("its hard")
    }
    else if(x=="medium"){
        gameInterval = setInterval(game, 1000);
    }
    else{
        gameInterval = setInterval(game, 1500);
    }
    
}




//highscore
let highscore
let highscorecard=document.querySelector('.highscore')
if(localStorage.getItem("highscore")){
    highscore=localStorage.getItem("highscore");
    highscorecard.innerHTML=`Highscore: ${highscore}`;
}
else{
    highscore=0;
    localStorage.setItem("highscore",0)
    highscorecard.innerHTML=`Highscore: ${highscore}`;
}




//Reset button
resetbtn=document.querySelector('.reset-btn');
resetbtn.addEventListener('click',()=>{
    if(score>highscore){
        highscore=score
        localStorage.setItem("highscore",highscore)
        highscorecard.innerHTML=`Highscore:${highscore}`;
    }
    score=0
    scorecard.innerHTML=`Your Score: 0`;
    document.querySelector(".gameover").innerText ="";
    isgameover=false;
   gameInterval = setInterval(game, 1500);

  
  const checked = document.querySelector('input[name="level"]:checked');
  if (checked) onModeChange({ target: checked });
})

//work to left
//set highscore separately for each level and when I change the mod the scorecard should be 0 and if(score>highscore) change high score