/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//INPUT DELLA PAROLA
let word = document.querySelector('input').value;
//OUTPUT DELL'ESITO

//BOTTONE "VERIFICA"
const button = document.querySelector('button');

//AGGIUNGO L'EVENTO AL BOTTONE E GLI INSERISCO LA FUNZIONE
button.addEventListener('click', function(){
    wordCheck();
});





function wordCheck() {
    let output = document.querySelector('.output');
    //USO .SPLIT PER TRASFORMARE LA PAROLA IN UN ARRAY
    let splitString = word.split("");
    //console.log(splitString);

    //USO IL METODO .REVERSE DEGLI ARRAY PER "CAPOVOLGERE" LA PAROLA
    let reverseArray = splitString.reverse();
    //console.log(reverseArray);

    //CON .JOIN RI-TRASFORMO LA PAROLA IN STRINGA PER ANDARLA A CONFRONTARE
    let join = reverseArray.join("");
    
    //CREO UN CICLO PER CONFRONTARE LE DUE PAROLE
    if (join === word){
        output.innerHTML = 'E\' PALINDROMA'
    }else{
        output.innerHTML = 'NON E\' PALINDROMA'
    }
}

