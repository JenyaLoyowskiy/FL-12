// Your code goes here


const rangeMult = 4,
      prizeMult = 2,
      roundWinMult = 0.5,
      defaultNumbRange = 8,
      defaultPrize = 100;

let randomNumb,
    playerCurrWin = 0,
    numbRange = defaultNumbRange,
    maxWinPrize = defaultPrize,
    isPlaying = true,
    doesPlayerWin = false,
    currWinPrize;

if (confirm('Do you want to play a game?')) {
    while(isPlaying){
        randomNumb = Math.round(Math.random()*numbRange);
        currWinPrize = maxWinPrize;
        doesPlayerWin = false;
        console.log(randomNumb);
        for(let i = 3; i > 0; i--){
            let playerNumb = parseInt(prompt(`
                Choose a roulette pocket number from 0 to ${numbRange}
                Attempts left: ${i}
                Total prize: ${playerCurrWin}$
                Possible prize on current attempt: ${currWinPrize}$
            `));
            if (playerNumb === randomNumb) {
                i = 0;
                playerCurrWin += currWinPrize;
                doesPlayerWin = true;
                if(confirm(`
                    Congratulation, you won!
                    Your prize is: ${currWinPrize} $. Do you want to continue?
                `)){
                    maxWinPrize *= rangeMult;
                    numbRange += prizeMult;
                }else{
                    alert(`Thank you for your participation. Your prize is: ${playerCurrWin}$`);
                    if(confirm('Want to play again ?')){
                        numbRange = defaultNumbRange;
                        maxWinPrize = defaultPrize;
                        playerCurrWin = 0;
                    }else{
                        isPlaying = false;
                    }
                }
            }
            currWinPrize *= roundWinMult;
        }
        if (!doesPlayerWin) {
            alert(`Thank you for your participation. Your prize is: ${playerCurrWin}$`);
            if(!confirm('Want to play again ?')){
                isPlaying = false;
            }else{
                numbRange = defaultNumbRange;
                maxWinPrize = defaultPrize;
                playerCurrWin = 0;
            }
        }
    }
}else{
    alert('You did not become a billionaire, but can.');
}