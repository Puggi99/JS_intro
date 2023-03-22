// Incrementi

// let index = 5;
// // index = index + 1;
// index += 5;                 // stessa cosa della linea 4, è solo un metodo più veloce.

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let counter = 0;
// counter = counter + 1;      // linea 9-10-11 fanno la stessa cosa, solo un modo diverso per scriverlo. Stessa cosa anche per il - "--, -=" e per il *
// counter += 1;
// counter++;                  

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let pluto = 5;

// console.log(pluto++);       // Pluto viene prima usato e poi avviene la somma, quindi console.log farà vedere 5, per poi far diventare Pluto 6
// console.log(pluto++);       // console stamperà 6, per poi far prendere a pluto il valore di 7

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let paperino = 5;

// console.log(++paperino);    // se invece che mettere il "+" dopo, lo si mette prima, avviene prima la somma e dopo la stampa,
// console.log(++paperino);    // quindi in questo caso console.log stamperà Paperino di valore 6

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// IF - ELSE - ELSE IF 

// let pippo = true;

// if (pippo) {
//     console.log("var merda!");
// }

// else {
//     console.log("viva var!");
// }

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// let pluto = 1;

// if (pluto !== 3)                             // "if" può anche stare da solo, senza else.
// {
//     console.log("viva JavaScript!");
// }

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let paperino = 5;

// if (paperino === 3) {
//     console.log("Qui");
// }

// else if (paperino === 5) {
//     console.log("Quo");
// }

// else if (paperino === 1) {
//     console.log("Qua");
// }

// else {
//     console.log("daje roma daje");
// }

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// let paperone = 5;

// if (paperone < 10)                           // logga solo dollari, perchè, pur essendo la condizione di "else if" vera, lo è pure quella di if,                                    
// {                                           // e quindi logga solo la prima condizione
//     console.log("dollari");
// }

// else if (paperone < 6) {
//     console.log("euro");
// }

// else {
//     console.log("bitcoin");
// }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// ciclo WHILE

// while(true)                                // continua ad andare finchè la condizione data è vera
//  {
//     console.log("ciao");
//  }

// let index = 0;
// while (index < 10) 
// {
//     index++;
//     console.log(index);
// }

// while (index > -1) 
// {
//     index--;
//     console.log(index);
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ciclo FOR

// è simile al ciclo While ma in versione compressa

// for (let index = 0; index < 10; index++)      // stampa i numeri da 0 a 9 perchè prima stampa per poi aggiungere
// {
//     console.log(index);
// }    


// for(let index=0; index < 100; index +=5)     // da i multipli di 5 minori di 100.
// {
//     console.log(index)
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ESERCIZI

// scrivi un ciclo che stampi i numeri dispari minori di 300

//  for(let number=0; number < 300; number++)
//  {
//      if(number % 2 !== 0)
//      {
//          console.log(number);
//      }
//  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// scrivi un ciclo che parta da 10 torni a 0 e torni a 10

// for(let number=10; number => 0; number--){
//     console.log(number)
// }
// for(let number=1; number <= 10; number++){
//     console.log(number)
// }


// let index = 10;
// let step = -1;
// while(index <= 10){
//     console.log(index)
//     if(index===0){
//         step=1;
//     }
//     index += step;
// }
