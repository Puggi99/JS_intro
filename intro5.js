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


let numbers = [10, 2, 32, 4, 5]
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


let words = ["ciao", "pippo", "pluto", "paperino", "topolino", "ciao mondo"];
let res = words.filter(n => n.length > 5)
                .map(n=> n.length)
                .forEach(l => console.log(l))


for(let w of words) {
    if(w.length < 6){
        continue
    }
    let l = w.length
    console.log(l)
}






