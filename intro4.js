// ARRAY 

// L'Array è una scatola che, invece di contenere una cosa sola, può conterne quante ne vuole, e si scrive così:

// let pippo = [15, 3, 23, 34, 21];

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

// const arrayOfStrings = ["Andrea", "Davide", "Jing", "Valentina", "Vlad"]
// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }

// const indexOfJing = arrayOfStrings.indexOf('Jing');
// console.log(indexOfJing)

// arrayOfStrings[0] = "Pietro";

// console.log(arrayOfStrings[0]);



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
//         const element = words[i];
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


// function firstFiveChars(text){
//     let newText ="";
//     for (let i = 0; i < text.length; i++) {
//         if (i < 5){
//         const element = fiveCharsUpperCase(text[i]);
//         newText += element;
        
//     }
//     }return newText;

// } console.log(firstFiveChars("tomareomo"))


// (4) Scrivere una funzione che prenda come paramentro una stringa e restituisca la lunghezza della stringa senza spazi.

// 1° soluzione

// function stringLengthNoSpaces(randomWord){
//     let count = 0;
//     for (let i = 0; i < randomWord.length; i++) {
//         if(randomWord[i] !== " "){
//             count++
//         }
//     }return count;
// } console.log(stringLengthNoSpaces("c         iao"));

// 2° soluzione

// function lengthOfTheTextWithoutSpaces(text){
//     const textWithoutSpaces = text.replaceAll(" ", "");
//     return textWithoutSpaces.length;
// }



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
// function isMyNumberNegative(selectedNumber){
//     if(selectedNumber < 0){
//         selectedNumber *= -1;
    
//     }const newNumber = selectedNumber;
//      return !isMyNumberOdd(newNumber); 
// }

// function isMyNumberEven(selectedNumber){
//     if(selectedNumber === 0){
//         return true;
//     }
//     if (selectedNumber === 1) {
//         return false;
//     }
//     const newNumber = selectedNumber - 2
//     return !isMyNumberNegative(newNumber); 
// }


// function isMyNumberOdd(selectedNumber){
//     if(selectedNumber === 0){
//         return false;
//     }
//     if (selectedNumber === 1) {
//         return true;
//     }
//     const newNumber = selectedNumber - 2
//     return !isMyNumberEven(newNumber); 
// };

// console.log(isMyNumberEven(3)); //false
// console.log(isMyNumberOdd(-2)); //true



// _____________________________________________________________________________________________________________


// OBJECTS / OGGETTI

// Si indica con le graffe. Serve a contenere tipologie di dati diversi. A differenza dell'Array che contiene tanti dati, ma di tipologia uguale.

// const Andrea = {

//     name: "Andrea",
//     surname: "Asioli",
//     yob: 1978,
//     isMarried: false,
//     pupils:["Andrea", "Davide", "Jing", "Valentina", "Vlad"],
//     dog:{
//         name: "ariel",
//         breed: "border-collie",
//     },
//     "cool car": "BMW",                 // se c'è un nome con lo spazio, o comunque nomi particolari, vanno usate le "".
// }   
// console.log(Andrea)
// console.log(Andrea.surname)            // per richiamare un dato presente nell'object, basta usare questa sintassi. (Usare il ".").
// console.log(Andrea["yob"])             // oppure usare le parentesi quadre con le virgolette.




// USARE OBJECTS E ARRAY INSIEME.

// const Daniele = {
//     name:"Daniele",
//     surname: "Puggioni",
//     nickname: "Pooh",
//     "e-mail":  "danielepuggioni@hotmail.it",
// }

// const myClass = [Daniele];
// console.log(myClass);


// for(let i = 0; i < myClass.length; i++){
//     const person = myClass[i];
//     const description = {
//             'name': {$(person.name}; ${person.surname}; {$(person.nickname)},
//             ETA: $(2023 - person.yob),
//             Email: (person.e-mail),
//             console.log(description)
//     }

// }




// DA ARRAY A OGGETTI E VICEVERSA

// const arielArray = ['ariel', 'border-collie', 'maschio', 'bianco e nero'];

// const arielobj = {
//     name: arielArray[0],                                      // name = key, arielArray = value
//     breed:arielArray[1],
//     gender:arielArray[2],
//     color: arielArray[3],
// }

// console.log(arielArray);
// console.log(arielobj);


// const newArielArray = Object.values(arielobj);
// console.log(newArielArray)

// const newKeysArray = Object.keys(arielobj);
// console.log(newKeysArray);



// VALUES TYPES AND REFERENCE TYPES

// let pippo = 5;
// let pluto = pippo;
// pippo = 7;
// console.log(pippo);
// console.log(pluto);

// let topolino = {yob: 1930, name: "mickey mouse"};
// let newtopolino = topolino;
// topolino.yob = 1950;
// console.log(topolino.yob);
// console.log(newtopolino.yob);

// function sumTwo(selectedNumber){
//      selectedNumber += 2;
//      return selectedNumber; 
// }

// let paperino = 5;
// let basettoni = sumTwo(paperino);
// console.log(paperino);
// console.log(basettoni);

// function makeTwoYearsOlder(person){
//     person.yob += 2;
//     return person;
// }

// let Andrea = {
//     name: "Andrea",
//     yob: 1978,
// }

// let olderAndrea = makeTwoYearsOlder(Andrea);
// console.log(olderAndrea)
// console.log(Andrea)

// // #creare un clone

// function makeTwoYearsOlderWithClone(person){
//     // let clone = {name : person.name, yob: person.yob}                        // per clonare velocemente tutte le caratteristiche, basta usare "...
//     let clone = {...person}
//     clone.yob = clone.yob +2;
//     return clone;
// }

// let simone = {name: "simone", yob: 2003};
// let olderSimone = makeTwoYearsOlderWithClone(simone);
// console.log(simone);
// console.log(olderSimone);


// let clone = {...person }


// DESTRUTTTURARE 

// const libro = {
//     title: "La divina commedia",
//     author: "Dante Alighieri",
//     year: 2019,
//     state: "Italy",
//     editor: "Einaudi"
// }

// const title = (libro.title);
// const author = (libro.author);

// invece che scrivere queste due righe, è possibile fare così:

// const {title, author} = libro;
// console.log(title,author)




// JSON

// E' nato per avere un metodo veloce di conversione di un array in una stringa, e poi dalla stringa in object.

// const libro = {
//     title: "La divina commedia",
//     author: "Dante Alighieri",
//     year: 2019,
//     state: "Italy",
//     editor: "Einaudi"
// }


// const libroInStringa = JSON.stringify(libro);                       // comando JSON.stringify per trasformare in stringa
// console.log(libro);                                                 // comando JSON.parse per trasformare in object
// console.log(libroInStringa);

// const libroInStringa2 = '{"title":"Iliade","author":"Omero","year":2019,"state":"Italy","editor":"Giunti"}'
// const libro2 = JSON.parse(libroInStringa2)
// console.log(libro2)



// _____________________________________________________________________________________________________________

// Esempi Array


// FILTER

//1) scrivere una funzione che dato un array di numeri restituisca un array con i numeri maggiori o uguali a  0

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12]
// function interNegative(array){
//     let tempArray=[]
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element >= 0){
//           tempArray.push(element);
//         }

//     }return tempArray;
// }

// console.log(interNegative(numbers)) // 100, 0, 1001, 1, 34.



// MAPPING (Cambiare elementi degli Array)

//(2) Scrivere una funzione che dato un array di numeri li moltiplichi tutti per 2

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12]

// function multiplyAllElementsByTwo(array){
//     let tempArray = []
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]
//         let risultato = element *2;
//         tempArray.push(risultato);
//     }return tempArray;
// }
// console.log(multiplyAllElementsByTwo(numbers)); // 200, -46, 0, -468, 2002, 2, 68, -24;


// REDUCE (Ridurre gli elementi ad un unico valore)

//(3) Creare una funzione che somma tutti gli elementi di un array di numeri 

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12]

// function sumAllElements(array){
//     let newNumber = 0
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newNumber = newNumber + element;
//     }
//     return newNumber
// }
// console.log(sumAllElements(numbers)); //  867



// _____________________________________________________________________________________________________________________________________________________


//                                                                      ESERCIZI

//(1) Scrivere una funzione che prende in input un array di numeri e restituisce un array di stringhe in logica fizzBuzz
const numbers = [3,5,15,8,12,2]
function convertiArrayInFizzBuzz(array){

}

console.log(convertiArrayInFizzBuzz(array)); // ['Fizz','Buzz','FizzBuzz','8','Fizz','2']
//(2) Scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa
const numbers = [-3,5,15,-8,12,2,0]
function invertiElements(array){

}
console.log(invertiElements(numbers)); // [3,-5,-15,8,-12,-2,0]
//(3) Scrivere una funzione che prende in input un array di stringhe e restuisce un array di numeri con la lunghezza delle stringhe 
//(4) Scrivere una funzione che prende in input un array di stringhe e restisuice solo quelle che contengono la lettera z
//(5) Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari 
//(6) Scrivere una funzione che dato un array di stringhe restituisca una stringa composta dalle iniziali 
//(7) Scrivere una funzione che prende un array di numeri e restituisce il maggiore 