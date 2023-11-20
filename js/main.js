//PALINDROMA

//Chiedo all'utente una parola
/*
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
}*/

//Pari o dispari
//INFORMAZIONI DA CHIEDERE ALL'UTENTE
let choice = prompt("scegli se pari o dispari");
let number = prompt("inserisci un numero da 1 a 5");
console.log("scelto dall'utente: " + choice);
//TRASFORMO IN UN NUMERO
number = parseInt(number);
console.log("numero utente: " + number);

let randNum = randomNumberGeneration(1, 5)
console.log("numero casuale " + randNum)

let winner = numSum(number, randNum, choice)


//GENERO NUMERO CASUALE 
function randomNumberGeneration(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function numSum(num1, num2, stri){
    let sum = num1 + num2 
    if (sum % 2 == 0 && stri =="pari"){
        console.log(`${sum} hai vinto!`)
    }else if(sum % 2 == 0 && stri == "dispari"){
            console.log(`${sum} hai perso!`)
    }else if (sum % 2 !==0 && stri =="dispari"){
        console.log(`${sum} hai vinto!`)
    }else if (sum % 2 !==0 && stri == "pari"){
        console.log(`${sum} hai perso!`)
    }
        
    }
    





