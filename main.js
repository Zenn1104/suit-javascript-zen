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


// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
//     const pComputer = getComputerChoice();
//     const pPlayer = pBatu.className;
//     const hasil = getRules(pComputer, pPlayer);

//     const computerVisual = document.querySelector('.computer-btn');
//     computerVisual.textContent = pComputer;

//     const info = document.querySelector('.info-area');
//     info.innerHTML = hasil;

//     console.log(`pilihan computer : ${pComputer}`);
//     console.log(`pilihan player: ${pPlayer}`);
//     console.log(`hasil: ${hasil}`);
// });


const choice = document.querySelectorAll('ul li');
choice.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pComputer = getComputerChoice();
        const pPlayer = pil.className;
        const hasil = getRules(pComputer, pPlayer);
        
        const computerVisual = document.querySelector('.computer-btn');
        computerVisual.textContent = pComputer;
        
        const info = document.querySelector('.info-area');
        info.innerHTML = hasil;

        
        console.log(`pilihan computer : ${pComputer}`);
        console.log(`pilihan player: ${pPlayer}`);
        console.log(`hasil: ${hasil}`);
    })
})


// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function() {
//     const pComputer = getComputerChoice();
//     const pPlayer = pGunting.className;
//     const hasil = getRules(pComputer, pPlayer);

//     const computerVisual = document.querySelector('.computer-btn');
//     computerVisual.textContent = pComputer;

//     const info = document.querySelector('.info-area');
//     info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
//     const pComputer = getComputerChoice();
//     const pPlayer = pKertas.className;
//     const hasil = getRules(pComputer, pPlayer);

//     const computerVisual = document.querySelector('.computer-btn');
//     computerVisual.textContent = pComputer;

//     const info = document.querySelector('.info-area');
//     info.innerHTML = hasil;

//     console.log(`pilihan computer : ${pComputer}`);
//     console.log(`pilihan player: ${pPlayer}`);
//     console.log(`hasil: ${hasil}`);
// })