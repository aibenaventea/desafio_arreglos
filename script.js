// inicio parte 1
function alwaysHungry(arr1) {
    // tu código aquí
    let comidaCount = 0;

    for(let i = 0; i<arr1.length; i++) {
        if (arr1[i] == "comida") {
            console.log("delicioso");
            comidaCount++;
        }
    }
    if(comidaCount == 0) {
            console.log("Tengo hambre");
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

// fin parte 1

// // inicio parte 2
function highPass(arr2, cutoff) {

    let filteredArr = [];
    
    for(let i = 0; i < arr2.length; i++) {
        
        if(arr2[i] > cutoff) {
            filteredArr.push(arr2[i]);
        }
    }
    return filteredArr;
}
let result1 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result1); // esperamos de vuelta [6, 8, 10, 9]

// fin parte 2

// inicio parte 3

function betterThanAverage(arr3) {
    let sum = 0;
    // calcula el promedio
    for(let i = 0; i < arr3.length; i++){
        sum += arr3[i];
    }
    promedio = (sum / arr3.length);
    let count = 0

    for(let i = 0; i < arr3.length; i++){
        if(arr3[i]>promedio){
            count++;
        }
    }
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
let result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); // esperamos 4 de vuelta

// fin parte 3

// inicio parte 4
function reverse(arr4) {
    let revArr = [];
    for(let i=0; i<arr4.length;i++){
        revArr.push(arr4[(arr4.length-1)-i])
    }
    return revArr;
}

let result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// fin parte 4

// inicio parte 5
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    while(fibArr.length < n) {
        let ultimo = fibArr[fibArr.length-1];
        let penUltimo = fibArr[fibArr.length-2];
            fibArr.push(penUltimo+ultimo);
        }
    return fibArr;
}

let result4 = fibonacciArray(10);
console.log(result4); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// fin parte 5