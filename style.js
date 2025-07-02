let gameSlot = []
let userSlot = []
let color = ["yellow" , "red" ,"purple" , "green"];

let startGame = false;
level = 0;
let arr = [];
let maxarr = [];

document.addEventListener("keypress",function(){
    if(startGame == false){
        console.log("game started");
        startGame = true;
        levelUp();
    }
}
);

function levelUp(){
    level++;
    userSlot = [];
    h2 = document.querySelector("h2");
    h2.innerHTML = `LEVEL ${level}`;

    let idx = Math.floor(Math.random() * 3);
    let boxcolor = color[idx]
    let randbtn = document.querySelector(`.${boxcolor}`);

    btnflash(randbtn);
    gameSlot.push(boxcolor);
    console.log(gameSlot);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ 
        btn.classList.remove("flash");
    }, 400);
}

let btns = document.querySelectorAll(".box")
for(btn of btns){
    btn.addEventListener("click",btnpress)
}

function btnpress(idx){
    let btn = this;
    btn.classList.add("black");
    setTimeout(function(){ 
        btn.classList.remove("black");
    }, 150 );
    userColor = btn.getAttribute("id")
    userSlot.push(userColor);

    checkAns(userSlot.length - 1);
}

function checkAns(idx){
    if(gameSlot[idx] === userSlot[idx]){
        if(gameSlot.length == userSlot.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        body = document.querySelector("body");
        body.classList.add("gameOver");
        setTimeout(function(){ 
            body.classList.remove("gameOver");
            }, 300 );
        
        arr.push(level);
        maxLevel(arr);
        reset();
    }
}

function reset(){
    startGame = false;
    level = 0;
    gameSlot = [];
    userSlot = [];
    arr = [];
}

function maxLevel(array){
    let max = arr[0];
    maxarr.push(max);
    console.log(maxarr);
    let rslt = 0;
    let maximum = maxarr.reduce((el,rslt)=>{
        if(el>=rslt){
            return el;
        }else{
            return rslt;
        }
    });

    h2.innerHTML = `GAME OVER !! your score was :<b>${level}</b> <br></br>your highest score is : <b>${maximum}</b> <br><br>PRESS ANY KEY TO START`;
}




