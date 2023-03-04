'use strict';

let secretNumber=Math.floor(Math.random()*20+1);
let score=20;
let hs=0;

const checkButton=document.querySelector('.check');
const againButton=document.querySelector('.again');


const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};  

function compareValue(){
    let guess=document.querySelector('.guess').value;

    if(!guess){
        displayMessage("No Number");
        return;
    }

    guess=parseInt(guess);
    
    if(guess===secretNumber){
        displayMessage("Correct Number");
        document.querySelector('.number').style.width='30rem';
        //show the ? to secretnumber
        document.querySelector('.number').textContent=secretNumber;
        //update highscore
        if(score>hs){
            document.querySelector('.highscore').textContent=score;
            hs=score;
        }
        
        //updating backgroundcolor
        document.querySelector('body').style.backgroundColor="green";
    }else if(guess>secretNumber){
        score--;
        document.querySelector('.score').textContent=score;
        displayMessage("Too High!!");
    }else{
        score--;
        document.querySelector('.score').textContent=score;
        displayMessage("Too Low!");
    }
}
function refreshPage(){
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.guess').value="";
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent="?";
    document.querySelector('.number').style.width="15rem";
    secretNumber=Math.floor(Math.random()*20+1);
}

checkButton.addEventListener("click",compareValue);
againButton.addEventListener("click",refreshPage);
