const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const rockImage = document.querySelector('.human-hand'); 

function changeRock(){
    console.log('hello1');
    document.getElementById('human-hand').src = "hand.png";
    document.getElementById('human-hand').style.animationDuration = '0s';
}



function changePaper(){
    document.getElementById('human-hand').src = "paper.png";
    document.getElementById('human-hand').style.animationDuration = '0s';
    document.getElementById('human-hand').style.rotate = '-90deg';
}