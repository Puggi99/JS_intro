const lastElement = {
    value: 10,
    next: null

}

const thirdElement = {
    value: 15,
    next: lastElement
}

const secondElement = {
    value: 5,
    next: thirdElement
}

const firstElement = {
    value: 12,
    next: secondElement
}


// per ciclare la linked list
// let element = firstElement
// while(true) {
//     console.log(element.value);
//     if(element.next){
//         element = element.next;
//     }
//     else{
//         break;
//     }
// }


// function fromLinkedListToArray(first){
//     let tempArray = [];
//     let element = first
// while(true) {
//     tempArray.push(element.value)
//     if(element.next !== null){
//         element = element.next;
//     }
//     else{
//         break;
//     }
// }
//     return tempArray
// }

// console.log(fromLinkedListToArray(firstElement))
const myArray = ['pippo', 'pluto', 'paperino']
// let previousElement= null;

// function fromArrayToLinkedList(array){
//     for (let i = array.length -1; i >= 0; i--) {
//         const element = array[i];
//         const listElement = {
//             value: element,
//             next: previousElement
//         }
//         previousElement = listElement;
//     }
//     return previousElement
// }

// console.log(fromArrayToLinkedList(myArray))


// prepend

function prependListElement(first, newElement){
    const listElement = {
        value: newElement,
        next: first
    }
    return listElement
}

console.log(prependListElement(firstElement, 10000))

// .atIndex. trova l'elemento all'interno di una linked list tramite l'indice

function listElementAtIndex(first, index){
    let element = first;
    let i = 0;
    while(true){
        if(i === index){
            return element.value
        }
        if(element.next){
            element = element.next
            i++
        }
        else{
            return undefined;
        }
    }
    }
console.log(listElementAtIndex(firstElement, 0))
console.log(listElementAtIndex(firstElement, 3))
console.log(listElementAtIndex(firstElement, 10))
