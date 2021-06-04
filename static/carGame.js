
const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const carSound = new Audio('sound.mp3');
const gameOver = new Audio('gameover.mp3');

let player ={ speed : 5, score:0, start:true };
// let speed = 5;
let keys = { ArrowUp:false, ArrowDown:false, ArrowLeft:false, ArrowRight:false};

startScreen.addEventListener('click', start);


function gamePlay(){
    let car = document.querySelector('.car');          
    // let road = gameArea.getBoundingClientRect();
    // console.log(road)
    if(player.start)
    {
        moveLines();
        moveEnemy(car);
        if(keys.ArrowUp==true && player.y > 110){player.y -= player.speed}
        if(keys.ArrowDown==true && player.y < 650){player.y += player.speed}
        if(keys.ArrowLeft==true && player.x > 5){player.x -= player.speed}
        if(keys.ArrowRight==true && player.x < 340){player.x += player.speed}
        // console.log("I am Clicked");
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        carSound.play();
        window.requestAnimationFrame(gamePlay);
        // console.log(player.score++);
        player.score++;
        score.innerHTML = "Score : " + player.score;
    }
}

function isCollide(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();          
    

    return !((aRect.top > bRect.bottom) || (aRect.left > bRect.right) || ( aRect.bottom < bRect.top) || (aRect.right < bRect.left))
    // return !((aRect.top > bRect.bottom))
}

function moveLines(){
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function(item){
        if(item.y > 754){
            item.y -= 710;
        }
        item.y += player.speed;   
        item.style.top = item.y + "px";                
    })
}

function endGame(){
    carSound.pause();   
    player.start = false;
}

function moveEnemy(car){
    let enemyCar = document.querySelectorAll(".enemyCar");
    enemyCar.forEach(function(item){
        if(isCollide(car, item)){
            console.log("Collision");
            gameOver.play();
            carSound.pause();

            endGame();
        }
        if(item.y > 750){
            item.y -= 700;
            item.style.left = Math.floor(Math.random()*350) + "px";
        }
        item.y += player.speed-1.5;   
        item.style.top = item.y + "px";                          
    })}        

function start(){
    gameArea.classList.remove("hide");
    startScreen.classList.add("hide");            
    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);
    // let lineHeight = 90;
    for (let i = 0; i < 6; i++) {
        let roadLine = document.createElement("div");
        roadLine.classList.add("lines");
        roadLine.y = (i*140);
        roadLine.style.top = roadLine.y + "px";
        gameArea.append(roadLine);   
    }
    for (let i = 0; i < 3; i++) {
        let enemyCar = document.createElement("div");
        enemyCar.classList.add("enemyCar");
        enemyCar.y = (i*150);
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.left = Math.floor(Math.random()*350) + "px";
        gameArea.appendChild(enemyCar);

        
        gameArea.append(enemyCar);   
    }
    
    let car = document.createElement("div");
    car.classList.add("car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    
    
}
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

function keydown(e){
    if(e.key=='ArrowUp'){
        keys.ArrowUp=true;
        console.log(keys);
    }
    if(e.key=='ArrowDown'){
        keys.ArrowDown=true;
        console.log(keys);
    }
    if(e.key=='ArrowLeft'){
        keys.ArrowLeft=true;
        console.log(keys);
    }
    if(e.key=='ArrowRight'){
        keys.ArrowRight=true;
        console.log(keys);
    }
}
function keyup(e){
    if(e.key=='ArrowUp'){
        keys.ArrowUp=false;
        console.log(keys);
    }
    if(e.key=='ArrowDown'){
        keys.ArrowDown=false;
        console.log(keys);
    }
    if(e.key=='ArrowLeft'){
        keys.ArrowLeft=false;
        console.log(keys);
    }
    if(e.key=='ArrowRight'){
        keys.ArrowRight=false;
        console.log(keys);
    }

}

