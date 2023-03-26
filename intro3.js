//  SCOPE
 
// const pippo = "ciao";


// if(true) {

//     console.log(pippo);
//     const pluto = "JavaScript";
//     if(true){
//     console.log(pluto);                         // gli scope interni possono vedere quelli esterni, ma non il contrario
//     const paperino = "Pizza";           
//     }
//     console.log(paperino);
   
// }


// //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// // const pippo = "boh";                         // non è possibile dichiarare due variabili con lo stesso nome nello stesso scope

// for (let i = 0; i < 3; i++) {
//    console.log("ciao")
    
// }
//                                                 // in questo caso possiamo usare lo stesso nome della variabile perchè appartengono a due scope diversi

// for (let i = 0; i < 3; i++) {
//     console.log("hola")
     
//  }


//  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



//  for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {               // Quando ho uno scope dentro uno scope è meglio non avere variabili chiamati allo stesso modo, perchè     
//         console.log(i) //shadowed variable         la variabile più "interna" viene oscurata
//     }
// }


 //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------




// COME SCRIVERE UNA FUNZIONE

// Una funzione è un pezzo di codice che posso riutilizzare, hanno 3 tipi di sintassi diversa:


// (1)

// function elevaAlQuadrato(numero){
//     const risultato = numero * numero;
//     return risultato;
// }

// const dueAlQuadrato = elevaAlQuadrato(2);
// console.log(dueAlQuadrato);

// const noveAlQuadrato = elevaAlQuadrato(9);



// const numeroutente = prompt("Che numero vuoi elevare a potenza di due? ") 

// const numeroutentepotenza=(elevaAlQuadrato(numeroutente));

// console.log(numeroutentepotenza);


// (2)

// const elevaAlQuadrato2= function(numero){                                // FUNZIONE ANONIMA
//     const risultato = numero * numero;
//     return risultato;
// }

// console.log(elevaAlQuadrato2(3));


// (3)

// const elevaAlQuadrato3 = (numero) => numero * numero;                      // FUNZIONE LAMBDA
// console.log(elevaAlQuadrato3(12));                                         // se il codice è scritto in una sola riga, come in funzione lambda, il return non è indispensabile


// const elevaAlQuadrato4 = (numero) =>{                                      // se la funziona lambda ha bisogno di essere scritta in più righe c'è bisogno del comando "return"
//     const risultato = numero * numero;
//     return risultato;
// }






// Le funzioni possono avere TANTI INPUT (anche chiamati argomenti) ma solo UN OUTPUT


// function elevazionePotenza(base, esponente){
//     const risultato = base ** esponente;
//     return risultato;
// }


// console.log(elevazionePotenza(9,2));




 //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



 // FUNZIONE PURE E IMPURE

//  Non è detto che ogni funzione debba ritornare qualcosa.


// FUNZIONE IMPURA: fa delle modifiche allo stato del programma invece di ritornare delle cose. Questa funzione interagisce col programma ma non elabora niente.

// Esempio:

// function scriviNellaConsole(messaggio){     
//     console.log(messaggio);                                         // bisogna mettere "return". Se non messo, è come se invisibilmente ci sia scritto "return undefined"
// }

// scriviNellaConsole("Scemo chi legge");


// FUNZIONE PURA: non interagisce col programma. Prende l'input e ritorna l'output

// Esempio:

// function sommaUno(numero){
//     return numero +1;
    
// }

// console.log(sommaUno(2));


// NON FARE MAI UN MISTO TRA FUNZIONE PURA E IMPURA


// function log(messaggio){
//     console.log(messaggio);
// }

// log("DAJE ROMA DAJEEEEE")


// function skacchiera(i){
//     let scacchiera = "";

// for(let y = 0; y < 8; y++){
//     for(let x = 0; x < 8 ; x++){
//         if(y % 2 === 0){
//             if(x % 2 === 0){
//                 scacchiera += "#";
//             }else{
//                 scacchiera += " ";
//             }
            
//         }else{
//             if( x % 2 === 0){
//                 scacchiera += " ";
//             }else{
//                 scacchiera += "#";
//             }
//         }

//     }
//     scacchiera += "\n"
// }
// return scacchiera
// }

// console.log(skacchiera(1));


// SI PUO' DARE ANCHE UN COMPORTAMENTO DI DEFAULT SE C'E' PARAMETRO MANCANTE

// (1° metodo)
// function elevazionePotenza(base, esponente){
//     if(esponente === undefined){
//         const risultato = base**2;
//         return risultato;
//     }else{
//     const risultato = base ** esponente;
//     return risultato;
// }
// } console.log(elevazionePotenza(13));


// (2° metodo)

// function elevazioneAPotenzaConDefault(base,esponente=2){
//     const risultato = base ** esponente;
//     return risultato;
// }console.log(elevazioneAPotenzaConDefault(3))



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Le funzioni possono utilizzare altre funzioni

// function doubleAndPow3(selectedNumber){
//     const double = selectedNumber *2;
//     const pow3   = double ** 3;
//     return pow3;
    // const double = makeDouble(selectedNumber);
    // const pow3 = makePow3(double);
    // return pow3;
// } 
// console.log(doubleAndPow3(2));
// console.log(doubleAndPow3(3));


// posso spezzare questa funzione in sotto-funzioni

// function makeDouble(selectedNumber){
//     return selectedNumber * 2;
// }

// function makePow3(selectedNumber){
//     return selectedNumber ** 3;
// }


// return makePow3(makeDouble(selectedNumber))



// le funzioni possono avere delle funzioni al loro interno

// function ifMoreThanTenCharsUpperCase(text){
//     function ifMoreThanTenCharInside(textToCheck){
//         return textToCheck.length > 10;
//     }
    
//     if(ifMoreThanTenCharInside(text)){
//         return text.toUpperCase();
//     }else{
//         return text;
//     }
// }


// console.log(ifMoreThanTenCharsUpperCase("tuo padre non è in forma"))


// La ricorsione è un caso delle funzioni che utilizzano altre funzioni, ma la ricorsione utilizza sé stessa

// ESEMPIO 1

// function sumRangeRecursive(startNumber, endNumber, accumulator = 0){                                 // c'è bisogno di un termine aggiuntivo, in questo caso chiamato "accumulator"
//     if(startNumber>endNumber){
//         return accumulator
//     }
//     const newStart = startNumber + 1;
//     const newAccumulator = accumulator + startNumber;
//     return sumRangeRecursive(newStart, endNumber, newAccumulator)                                                                                    
// }

//  console.log(sumRangeRecursive(0,3)); // 6
//  console.log(sumRangeRecursive(1,3)); // 6
//  console.log(sumRangeRecursive(1,5)); // 15
//  console.log(sumRangeRecursive(2,6)); // 20
 

// Fasi di elaborazione:

// 1. startNumber = 0; endNumber = 3; accumulator 0 -> newStart = 1; endNumber = 3; newAccumulator = 0
// 2. startNumber = 1; endNumber = 3; accumulator 0 -> newStart = 2; endNumber = 3; newAccumulator = 1
// 3. startNumber = 2; endNumber = 3; accumulator 1 -> newStart = 3; endNumber = 3; newAccumulator = 3
// 4. startNumber = 3; endNumber = 3; accumulator 3 -> newStart = 4; endNumber = 3; newAccumulator = 6
// 5. startNumber = 4; endNumber = 3; accumulator 6 -> startNumber(4) è maggiore di endNumber(3) e quindi la funzione entra nella parte di "if", facendo return accumulator(6)

// "If" è il punto di uscita necessario in ogni Ricorsiva per uscire da questo loop, senza di esso andrebbe all'infinito



// ESEMPIO 2 (Esercizio 2 del Capitolo 3 di EloquentJavaScript)


// function isEven(selectedNumber){
//     if(selectedNumber === 0){
//         return true;
//     }
    
//     if(selectedNumber === 1){
//         return false;
//     }

//     const newNumber = selectedNumber -2;
//     return isEven(newNumber);
// }

// console.log(isEven(0));  //true
// console.log(isEven(1));  //false
// console.log(isEven(3));  //false
// console.log(isEven(8));  //true



// ESEMPIO 3 (con due funzioni)                  

// function isMyNumberEven(selectedNumber){
//     if(selectedNumber === 0){
//         return true;
//     }
//     if (selectedNumber === 1) {
//         return false;
//     }
//     const newNumber = selectedNumber - 2
//     return !isMyNumberOdd(newNumber); 
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
// console.log(isMyNumberOdd(3)); //true


