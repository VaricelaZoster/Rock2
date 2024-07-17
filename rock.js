
function getComputerChoice()
{
    let a=Math.random() * (3-0)+0;
    let b=Math.floor(a);

    if(b===1)
    {
        c="rock";
    }
    else if(b===2)
    {
        c="paper";
    }
    else{
        c="scissor";
    }
    console.log(c);
    return c;
}
function getHumanChoice()
{
    let a=prompt("Enter Choice");
    a=a.toLowerCase();
    return a;
}
let humanScore=0;
let computerScore = 0;
function playRound(humanSelection,computerSelection)
{
    if(humanSelection=="rock")
    {
        if(computerSelection=="paper")
        {
            computerScore+=1;
        }
        else if(computerSelection=="scissor")
        {
            humanScore+=1;
        }
    }
    else if(humanSelection=="paper")
    {
        if(computerSelection=="rock")
        {
            humanScore+=1;
        }
        else if(computerSelection="scissor")
        {
            computerScore+=1;
        }
    }
    else if(humanSelection=="scissor")
    {
        if(computerSelection=="rock")
        {
            computerScore+=1;
        }
        else if(computerSelection=="paper")
        {
            humanScore+=1;
        }
    }
    else
    {
        throw new Error("Randi hai kya laude");
    }
}
function playGame()
{
    for(let i=1;i<=5;i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
        console.log("Human score = " + humanScore);
        console.log("Computer score = "+computerScore);
    }
}
