
// Se crea una funcion que recibe como parametros un arra y un numero.
function numeros(array = [], target = 0){
    // Se crea un array donde se guardaran los números iguales a target
    let resultado = [];
    // El bucle recorrera el array 
    for(let i = 0; i < array.length; i++){
        // Se recorre el array pero empezando una posición después que en el array anterior
        for(let j = i + 1; j < array.length; j++){
            // Si la suma del elemento array[i]+array[j] se pushearan estos datos dentro de resultado.
            if(array[i] + array[j] == target){
                resultado.push([array[i],array[j]]);
            }
        }
    }
    return resultado;
}

console.log(numeros([2,4,3,6,9,8], 10))


