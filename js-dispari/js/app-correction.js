const numUtente = 5; //prompt
const sceltaUtente = 'pari'; //prompt
const numPc = getRandomNumber(1, 5);
const somma = numUtente + numPc;
const risultato = checkPariDispari(somma);
const vincitore = checkWinner(sceltaUtente, risultato);


function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkPariDispari(num){
    if(num % 2) return 'DISPARI'
    return 'PARI'
}
function checkWinner(sceltaUtente, risultato){
    if(sceltaUtente.toUpperCase() === risultato) return 'VINCE L\'UTENTE'
    return 'VINCE IL COMPUTER'
}