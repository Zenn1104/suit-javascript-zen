function getComputerChoice() {
    const computer = Math.random();
    if(computer < 0.34) return 'batu';
    if( computer >= 0.34 && computer < 0.67) return 'gunting';
    return 'kertas';
}

function getRules(computer, player) {
    if( player == computer) return 'SERI!';
    if( player == 'batu') return (computer == 'gunting') ? 'MENANG!':'KALAH!';
    if( player == 'gunting') return ( computer == 'batu') ? 'KALAH!' : 'MENANG!';
    if( player == 'kertas') return ( computer == 'gunting') ? 'KALAH!' : 'MENANG!';
}

function convertChoice(computer) {
    if(computer == 'batu') return '👊';
    if(computer == 'gunting') return '✌';
    if(computer == 'kertas') return '✋';
};


const choice = document.querySelectorAll('div');
choice.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pComputer = getComputerChoice();
        const finalChoiceComputer = convertChoice(pComputer);
        const pPlayer = pil.className;
        const hasil = getRules(pComputer, pPlayer);
        const pScore = document.querySelector('.player-score');
        const cScore = document.querySelector('.computer-score');

        const computerVisual = document.querySelector('.computer-btn');
        computerVisual.textContent = finalChoiceComputer;

        let scorePlayer = 0;
        let scoreComputer = 0;

        if(hasil == 'MENANG!') { 
            scorePlayer += 1 ; 
        }
        else if(hasil == 'KALAH!') { 
            scoreComputer += 1 ;
        }else {
            return 0;
        }

        pScore.innerHTML = scorePlayer;
        cScore.innerHTML = scoreComputer;
        console.log(` score player : ${scorePlayer}`);
        console.log(` score computer : ${scoreComputer}`);
        
        const info = document.querySelector('.info-area');
        info.innerHTML = hasil;

        console.log(`pilihan computer : ${pComputer}`);
        console.log(`pilihan player: ${pPlayer}`);
        console.log(`hasil: ${hasil}`);
    })
})