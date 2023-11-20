//PALINDROMA

//Chiedo all'utente una parola

let word = prompt("inserisci una parola");
let reversedword = reverseString(word);

//Verifichiamo se la parola è palindroma
if (word == reversedword) {
    console.log("La parola è palindroma.");
}
else {
    console.log("La parola non è palindroma.");
}



//Funzione per invertire la stringa
function reverseString(str) {
    return str.split("").reverse().join("");
}

//Pari o dispari
//INFORMAZIONI DA CHIEDERE ALL'UTENTE
let choice = prompt("scegli se pari o dispari");
let number = prompt("inserisci un numero da 1 a 5");

//TRASFORMO IN UN NUMERO
number = parseInt(number);


//GENERO UN NUMERO RANDOM DA 1 A 5
function genRanNum1To5(maxNumber) {
    let randomNumber = Math.floor(Math.random() * 6 (maxNumber + 1));
    return randomNumber;
}
//let randNum = math.floor(math.random() * 6)

let somma = randomNumber + number;

if(somma % 2 == 0 && choice = "pari" ){
    console.log("HAI VINTO");
    else if (somma % 2 !==0 )
    console.log("HAI VINTO")
    

}


