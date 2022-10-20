/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//L'UTENTE SCEGLIE PARI O DISPARI E INSERISCE UN NUMERO DA 1 A 5

// A seconda di quello che sceglie l'utente il pc sceglie l'opposto
const userBet = prompt('Pari o Dispari?');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
let computerBet;

if(userBet === 'pari', 'Pari', 'PARI'){
    console.log('L\'utente ha scelto: Pari')
    computerBet = 'dispari',
    console.log(computerBet);
}else if(userBet === 'dispari', 'Dispari', 'DISPARI'){
    console.log('L\'utente ha scelto: Dispari')
    computerBet = 'pari'
    console.log(computerBet);
}else{
    alert('Puoi solo scrivere pari o dispari');
};

randomNumberGenerator();

 




//GENERO UN NUMERO RANDOM DA 1 A 5 PER IL COMPUTER (USANDO UNA FUNZIONE).
function randomNumberGenerator(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log('Il Computer sceglie:', randomNumber);
    console.log('L\'utente sceglie', userNumber);
    
        //SOMMO I 2 NUMERI
    const somma = userNumber + randomNumber;

    //STABILISCO SE LA SOMMA DEI DUE NUMERI E' PARI O DISPARI
    if(!(somma % 2)){
          console.log('il risultato è pari');
    }else{
          console.log('il risultato è dispari');
    } 
    
};




