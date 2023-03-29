// let a = 5;
// let b = "ciao"

// function square(num) {
//      return num*num;
// }

// console.log(square(a))

// let f = function(n){                      //posso creare una funzione per assegnarla ad una variabile
//     return n*n;
// }

// console.log(f(4))   


// Le funzioni possono prendere come parametro altre funzioni, 
// vengono chiamate "High order Functions" o "Funzioni di alto livello", queste possono
// creare anche altre funzioni.

// ripetere un'operazione un certo numero di volte

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function logNumbersFrom0To9(){
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
        
//     }
// }
// logNumbersFrom0To9();


// Astrarre nella programmazione vuol dire rendere il codice più leggibile, ma anche
// rendere lo stesso più debuggabile.


// function logNumbersFrom0ToMaxNum(maxNum){
//     for (let i = 0; i <=maxNum; i++) {
//         console.log(i);
        
//     }
// }
// logNumbersFrom0ToMaxNum(90);


// function logNumber(n){
//     console.log(n)
// }

// function logDouble(n){
//     console.log(n*2)
// }
// function logHello(){
//     console.log("Hello")
// }

// function repeatFrom0To(maxNum, func){
//     for (let i = 0; i <= maxNum; i++) {
//         func(i) // Qualunque parametro io gli dia, fa un'operazione
//         // func <- logNumber
//         }
        
//     }


// repeatFrom0To(10, logDouble)


// Esempi
// Vorrei chiamare la funzione "repeatFrom0To" in modo che stampi per ogni numero delle (i) se i è divisibile per 3(true) se no (false)

// function isDivisibleBy3(i) {
//     if(i % 3 === 0){
//         console.log(i + ": " + true)
//     }else{
//         console.log(i + ": " + false)
//     }
// }

// function repeatFrom0To(maxNum, func){
//     for (let i = 0; i <= maxNum; i++) {
//         func(i)
//     }
// }

// repeatFrom0To(20, isDivisibleBy3)


//funzioni anonime

// repeatFrom0To(20, function(n){
//     if(n% 3 === 0){
//         console.log(n + ": " + true)
//     }else{
//         console.log(n + ": " + false)
//     }
//   }
// )

// setInterval(function() {console.log("Hello")}, 1000);               // setinterval posso dirgli di fare una certa operazione con un intervallo

// setInterval(() => {console.log("diocn")}, 1000, interval);


// CLOSURE 

// console.log("CLOSURE E FUNZIONI CHE RESTITUISCONO ALTRE FUNZIONI")

// let counter = 0
// function printAndIncrementCounter(){
//         console.log(counter)
//         counter++
// }


// printAndIncrementCounter()
// printAndIncrementCounter()
// printAndIncrementCounter()


// function getRangeCheckFunction(min,max){
//     return function(n){
//         return n>= min && n<=max
//     }
// }

// let isInRange = getRangeCheckFunction(0,5)
// console.log(isInRange(7))
// console.log(isInRange(1))
// console.log(isInRange(8))




// FUNZIONE DI ORDINE SUPERIORE CON GLI ARRAY


// let numbers = [10, 2, 32, 4, 5]
// let squaredNumbers = []
// for(let n of numbers){                                  // usare il comando "let n of" per controllare ogni elemento
//     squaredNumbers.push(n*n)
// }
// console.log(squaredNumbers);


// scrivere una funziona map che dato un ingresso di un array costituisce un nuovo array con gli stessi elementi del primo trasformati usando una funzione ricevuta in ingresso

// function multiplyByTwo(n){
//     return n*2
// }



// function map(array, func) { // array=[10, 2, 32, 4, 5] func=multiplyByTwo
//     let modifiedArray = [];
//     for (let i = 0; i < array.length; i++) { // i=0
//         const elem = array[i] // elem=10
//         let result = func(elem) // multiplyByTwo(10)
//         modifiedArray.push(result);
//     }return modifiedArray


// }

// // [10, 2, 32, 4, 5]
// console.log(map(numbers, multiplyByTwo))
// console.log(map([1,2,1,1], n => n*1000))

// let testArray = [9,9,3]

// console.log(testArray.map(n => n*n))
// console.log(testArray.filter(n => n <= 5))
// console.log(testArray.forEach(n => sum += n))


// let words = ["ciao", "pippo", "pluto", "paperino", "topolino", "ciao mondo"];
// let res = words.filter(n => n.length > 5)
//                 .map(n=> n.length)
//                 .forEach(l => console.log(l))


// for(let w of words) {
//     if(w.length < 6){
//         continue
//     }
//     let l = w.length
//     console.log(l)
// }


// concetti sulle higher order functions
// 1) le higher order functions sono abbastanza strane;
// 2) la reduce è la più strana in assoluto;
// 3) esistono molti linguaggi di programmazione che ne fanno tranquillamente a meno;
// 4) esistono molti programmatore che ne fanno tranquillamente a meno (anche programmatori molto bravi);
// 5) ogni volta che qualcuno dei ragazzi che lavora con me deve scrivere una reduce non banale mi chiama per conforto;
// 6) purtroppo dovete imparare almeno a leggerle;




// Higher order function
// 1) può avere sia in input che in output una funzione
// 2)console.log([3,5,12,1].map((numero) => numero *2)
// 3)

// function loopNumbersFrom1To15AndApplyAFunction(myStrangeFunction, mySecondStrangeFunction){
//     for (let i = 0; i < 16; i++) {
//         const resultOfStrangeFunction = myStrangeFunction(i);
//         mySecondStrangeFunction(resultOfStrangeFunction)
//     }
// }

// function divideBy2IfEven(myNumber){
//     if(myNumber % 2 === 0){
//         return myNumber / 2;
        
//     }
//     return myNumber
// }

// // function logIfGreaterThan4(myNumber){
// //     if(myNumber > 4){
// //     console.log(myNumber);
// //     }
// // }

// // loopNumbersFrom1To15AndApplyAFunction(divideBy2IfEven,logIfGreaterThan4)

// // 4)




// function divideBy2IfEvenPart2(myNumber){
//     if(myNumber % 2 === 0){
//         const element = myNumber / 2;
        
//     }
//     return element
// }

// let numbers = [3,4,6,9,12,15,13]

// function divideBy3(n, divideBy2IfEvenPart2){
//     let result = 0;
//     for (let i = 0; i < n.length; i++) {
//         const element = n[i];
//         result += divideBy2IfEvenPart2.element(n/3)
//     }return result
// }

// console.log(divideBy3(numbers))



// function multiply(selectedNumber){
//     let result =  selectedNumber * myNumber;
//     return result;
// }


// function createMultiplicator(myNumber){
//     function multiply(selectedNumber){
//         return selectedNumber * myNumber;
//     }
// }

// return (selectedNumber) => selectedNumber *myNumber;

//_______________________________________________________________________________________________________________________________________________________________________


// 5)

// function add1(selectedNumber){
//     return selectedNumber+1;
// }

// const add2 = applyTwice(add1);

// function applyTwice (myFunction){                                        // funzione che prende un'altra funzione e la modifica
//     return(input) => myFunction(myFunction(input))
// }

// console.log(add2(5)) // 7

// const add4 = applyTwice(add2)
// console.log(add4(4))

// console.log(applyTwice(applyTwice(add1))(10)); // 14


//_______________________________________________________________________________________________________________________________________________________________________


// TUTTI I CICLI IN JAVASCRIPT
// WHILE

// const numbers = [9,8,7,1,2,3]
// let i = 0;
// while (i < numbers.length){
//     const element = numbers[i];
//     console.log(element);
//     i++
// }

// FOR

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element)
    
// }
    
// DO WHILE

// let j = 0;
// do {
//     const element = numbers[j];
//     console.log(element);
//     j++

// }while(j<numbers.length);

// FOR OF

// for (const element of numbers) {
//     console.log(element)
// }


// FOR EACH

// numbers.forEach((element) => console.log(element));


// // MAP
// numbers.map((element) => console.log(element *2));
// // FILTER
// numbers.filter((element)=> console.log(element % 2 === 0));
// // REDUCE
// numbers.reduce((previousElement, currentElement)=> previousElement + currentElement, 0);                   // lo 0 nella reduce è il valore iniziale

// const strings = ['qui','quo','qua']
// strings.reduce((previousElement,currentElement) => previousElement + currentElement, '');

// // FOR IN 
// // cicla gli oggetti

// const Andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     hasADog: true,
//     yob: 1978,
// }

// for (const key in Andrea) {
//     if (Object.hasOwnProperty.call(Andrea, key)) {
//         const value = Andrea[key];
//         console.log(`Andrea ha la proprietà ${key} associata al valore ${value}`)
//     }
// }
//_______________________________________________________________________________________________________________________________________________________________________

//  TRASFORMARE GLI ESERCIZI PRECEDENTI USANDO FILTER-MAP-REDUCE

//(1) Scrivere una funzione che prende in input un array di numeri e restituisce un array di stringhe in logica fizzBuzz

const numbers = [3, 5, 15, 8, 12, 2];

function convertArrayInFizzBuzzMap(array){
    const tempArray = array.map((element) => {
        let newNumber = [''];
        if(element % 3 === 0 && element % 5 === 0){
           newNumber = "FizzBuzz"
        }else if(element % 3 === 0){
            newNumber =  "Fizz"
        }else if(element % 5 === 0){
            newNumber = "Buzz"
        }else{
            newNumber += element
        } 
        return newNumber;
    })
    return tempArray;
}



// console.log(convertArrayInFizzBuzz(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']
console.log(convertArrayInFizzBuzzMap(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']



//(2) Scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa
const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

console.log(numbers1.map((element)=> element * -1))

//(3) Scrivere una funzione che prende in input un array di stringhe e restuisce un array di numeri con la lunghezza delle stringhe 

const strings = ['pippo', 'pluto', 'qui'];

console.log(strings.map((element)=> element.length))

//(4) Scrivere una funzione che prende in input un array di stringhe e restisuice solo quelle che contengono la lettera z

const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

console.log(strings2.filter((element)=>element.includes('z')))

//(5) Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari 

const numbers2 = [-3, 5, 15, -8, 12, 2, 0];
console.log(numbers2.filter((element)=>element % 2===0))

//(6) Scrivere una funzione che dato un array di stringhe restituisca una stringa composta dalle iniziali 

const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array){
  
    let tempString = array.reduce((accumulator, element) => accumulator + element[0], '')

    return tempString;

}
console.log(sumFirstChar(strings3)) //'pop'

//non capito

//(7) Scrivere una funzione che prende un array di numeri e restituisce il maggiore 

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];
const numbers4 = [-1, -5, -3]

// function maxElement(array){
//     let maxNumber = -Infinity;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(element > maxNumber){
//             maxNumber = element;
//         }
//     }
//     return maxNumber;
// }
// console.log(maxElement(numbers3)) //15


function maxElement(array){
  return array.reduce((accumulator, element) => Math.max(accumulator, element))
}

console.log(maxElement(numbers3)) //15



