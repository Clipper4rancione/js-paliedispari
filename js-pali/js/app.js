/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//INPUT DELLA PAROLA
let word = document.querySelector('input').value;
//OUTPUT DELL'ESITO
let output = document.querySelector('.output');
//BOTTONE "VERIFICA"
const button = document.querySelector('.btn');

button.addEventListener('click', wordCheck());



function wordCheck() {
    //USO .SPLIT PER TRASFORMARE LA PAROLA IN UN ARRAY
    let splitString = word.split("");
    //console.log(splitString);
    //USO L'ATTRIBUTO .REVERSE DEGLI ARRAY PER "CAPOVOLGERE" LA PAROLA
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

