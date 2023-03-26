// ARRAY 

// L'Array è una scatola che, invece di contenere una cosa sola, può conterne quante ne vuole, e si scrive così:

let pippo = [15, 3, 23, 34, 21];

// let pluto = [1, "ciao", true];                          // In uno stesso Array possono essere presenti elementi di vario tipo, però è sconsigliabile utilizzare questo metodo perchè può causare problemi.
                                                           // Per questo motivo è meglio creare un Array per ogni tipo (uno per stringhe, uno per numeri ecc..).
// console.log(pippo);


// pippo.push(100);                                        // Per aggiungere un elemento alla fine dell'Array utilizzare il comando .push.
// // pippo.pop();                                         // Per eliminare l'ultimo elemento dell'Array utilizzare il comando .pop.

// const pluto = pippo.pop();
// const paperino = pippo.pop();


// console.log(pippo); // [15, 3, 23, 34, 21, 100]
// console.log(pluto); // [100]
// console.log(paperino); // [21]


// pippo.unshift(200);                                     // Per aggiungere l'elemento all'inizio dell'Array utilizzare il comando .unshift.
// // pippo.shift();                                       // Per eliminare il primo elemento dell'Array utilizzare il comando .shift.


// const paperone = pippo.shift(); // [200]
// const paperina = pippo.shift(); // [15]

// console.log(paperone);
// console.log(paperina);



// console.log(pippo);
// pippo.pop()                                             // A volte il log non è affidabile.
// console.log(pippo);



// COME CICLCARE DENTRO UN ARRAY

// const arrayOfStrings = ["Andrea", "Jing", "Valentina", "Vlad"]
// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }



//                                                                          ESERCIZI


// (1) Scrivere una funzione che prenda come parametro un Array di numeri e fa console.log dei numeri con la logica FizzBuzz.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// function FizzBuzz(numbers){
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers [i];
//     if (element % 3 === 0, element % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (element % 3 == 0) {
//         console.log("Fizz");
//     } else if (element % 5 == 0) {
//         console.log("Buzz");
//     } else{
//         console.log(element);
//     }
// }   
// } 
// FizzBuzz(numbers);




// (2) Scrivere una funzione che prenda come parametro un Array di stringhe e logga quelle più piccole di 5 caratteri.


// const words = ["Pippo", "paperino", "pluto", "ciao", "boh", "non", "so", "cosa", "scrivere"]

// function smallWords(text){
//     for (let i = 0; i < words.length; i++) {
//         let element = words[i];
//     if(element.length < 5){
//         console.log(element);
//     }
        
//     }
// } smallWords(words);




// (3) Scrivere una funzione che prenda come parametro una stringa e restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo.


// function fiveCharsUpperCase(text){
//     text = text.toUpperCase();
//     return text;    
// }

// let newText ="";
// function firstFiveChars(text){
//     for (let i = 0; i < 5; i++) {
//         const element = fiveCharsUpperCase(text[i]);
//         newText += element;
        
//     } return newText;


// } console.log(firstFiveChars("tomareomo"))


// (4) Scrivere una funzione che prenda come paramentro una stringa e restituisca la lunghezza della stringa senza spazi.


// function stringLengthNoSpaces(randomWord){
//     let count = 0;
//     for (let i = 0; i < randomWord.length; i++) {
//         if(randomWord[i] !== " "){
//             count++
//         }
//     }return count;
// } console.log(stringLengthNoSpaces("c         iao"));



// (5) Scrivere una funzione che prenda come paramentro una stringa e restituisca il numero degli spazi.


// function stringLengthNoSpaces(randomWord){
//     let count = 0;
//     for (let i = 0; i < randomWord.length; i++) {
//         if(randomWord[i] === " "){
//             count++
//         }
//     }return count;
// } console.log(stringLengthNoSpaces("c iao"));



// ESERCIZIO 3 CAPITOLO 3 DI ELOQUENT JAVA SCRIPT

// const bbc = "BBC";
// const weirdWord = "kakkerlak";

// function countBs(text){
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if(element === "B"){
//             count++
//         }
//     }return count;
// }console.log(countBs(bbc));


// function countK(text){
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if(element === "k"){
//             count++
//         }
//     }return count;
// }console.log(countK(weirdWord));




// CORREGGERE PROBLEMATICA FUNZIONE CON NUMERI NEGATIVI
function isMyNumberNegative(selectedNumber){
    if(selectedNumber < 0){
        selectedNumber *= -1;
    
    }const newNumber = selectedNumber;
     return !isMyNumberOdd(newNumber); 
}

function isMyNumberEven(selectedNumber){
    if(selectedNumber === 0){
        return true;
    }
    if (selectedNumber === 1) {
        return false;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberNegative(newNumber); 
}


function isMyNumberOdd(selectedNumber){
    if(selectedNumber === 0){
        return false;
    }
    if (selectedNumber === 1) {
        return true;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberEven(newNumber); 
};

console.log(isMyNumberEven(3)); //false
console.log(isMyNumberOdd(-2)); //true
