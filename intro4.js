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
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function FizzBuzz(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element % 3 === 0 && element % 5 === 0){
        return "FizzBuzz";
        }else if(element % 3 === 0){
            return "Fizz";
        }else if(element % 5 === 0){
            return "Buzz";
        }
        return element;
        }
        

    }console.log(FizzBuzz[numbers]);

// (2) Scrivere una funzione che prenda come parametro un Array di stringhe e logga quelle più piccole di 5 caratteri.
// (3) Scrivere una funzione che prenda come parametro una stringa e restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo ,
// (4) Scrivere una funzione che prenda come paramentro una stringa e restituisca la lunghezza della stringa senza spazi.
// (5) Scrivere una funzione che prenda come paramentro una stringa e restituisca il numero degli spazi.


