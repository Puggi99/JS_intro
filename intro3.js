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

function elevazioneAPotenzaConDefault(base,esponente=2){
    const risultato = base ** esponente;
    return risultato;
}console.log(elevazioneAPotenzaConDefault(3))