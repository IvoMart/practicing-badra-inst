// Ejercicio 1: Suma de Vectores
console.log('--- Ejercicio 1: Suma de Vectores ---');

function sumarVectores(vector1, vector2) {
    if (!Array.isArray(vector1)) {
        console.error('Error: El primer parámetro proporcionado debe ser un array.');
        return [];
    }
    if (!Array.isArray(vector2)) {
        console.error('Error: El segundo parámetro proporcionado debe ser un array.');
        return [];
    }
    let resultado = vector1.map((num, index) => num + vector2[index])
    return resultado
}

function sumarVectores2(vector1, vector2){
    if (!Array.isArray(vector1)) {
        console.error('Error: El primer parámetro proporcionado debe ser un array.');
        return [];
    }
    if (!Array.isArray(vector2)) {
        console.error('Error: El segundo parámetro proporcionado debe ser un array.');
        return [];
    }

    let resultado = []
    
    for (let i = 0; i < vector1.length; i++) {
        resultado.push(vector1[i] + vector2[i])
    }
    return resultado
}


/**
 * Explicación:
 * Escribe una función llamada sumarVectores que reciba dos vectores de números del mismo tamaño
 * y devuelva un nuevo vector que contenga la suma de los elementos correspondientes de ambos vectores.
 * Por ejemplo, si los vectores son [1, 2, 3] y [4, 5, 6], el resultado debería ser [5, 7, 9].
 */

// Ejercicio 2: Contar Elementos Pares e Impares
console.log('\n--- Ejercicio 2: Contar Elementos Pares e Impares ---');

function contarParesImpares(vector) {
    if (!Array.isArray(vector)) {
        console.error('Error: El parámetro proporcionado debe ser un array.');
        return [];
    }

    let resultado = {}
    resultado.pares = 0
    resultado.impares = 0
    vector.map((num) => num % 2 == 0 ? resultado.pares++ : resultado.impares++ )
    return resultado;
}


function contarParesImpares2(vector) {
    if (!Array.isArray(vector)) {
        console.error('Error: El parámetro proporcionado debe ser un array.');
        return [];
    }

    let res = {resultado: {}}
    res.resultado.pares = 0
    res.resultado.impares = 0
    vector.map((num) => num % 2 == 0 ? res.resultado.pares++ : res.resultado.impares++ )
    return res;
}

/**
 * Explicación:
 * Crea una función llamada contarParesImpares que reciba un vector de números
 * y devuelva un objeto con dos propiedades: pares e impares,
 * que contengan la cantidad de números pares e impares en el vector, respectivamente.
 */

// Ejercicio 3: Ordenar Nombres
console.log('\n--- Ejercicio 3: Ordenar Nombres ---');

// Pon tu código aquí

function ordenarNombres(nombres) {
    return nombres.slice().sort();
}


/**
 * Explicación:
 * Escribe una función llamada ordenarNombres que reciba un vector de nombres
 * y devuelva un nuevo vector con los nombres ordenados alfabéticamente.
 */

// Ejercicio 4: Calcular Producto
console.log('\n--- Ejercicio 4: Calcular Producto ---');

// Pon tu código aquí

function calcularProducto(vector) {
    let producto = 1;
    for (let i = 0; i < vector.length; i++) {
        producto *= vector[i];
    }
    
    return producto;
}

function calcularProducto2(vector) {
    return vector.reduce((producto, numero) => producto * numero, 1);
}

/**
 * Explicación:
 * Crea una función llamada calcularProducto que reciba un vector de números
 * y devuelva el producto de todos los elementos del vector.
 * Si el vector está vacío, debe devolver 0.
 */

// Ejercicio 5: Unión de Conjuntos
console.log('\n--- Ejercicio 5: Unión de Conjuntos ---');

// Pon tu código aquí

function unionConjuntos(conjunto1, conjunto2) {
    let union = new Set(conjunto1);

    for (let elem of conjunto2) {
        union.add(elem);
    }

    return union;
}

function unionConjuntos2(conjunto1, conjunto2) {
    return new Set([...conjunto1, ...conjunto2]);
}

/**
 * Explicación:
 * Escribe una función llamada unionConjuntos que reciba dos vectores que contienen conjuntos
 * (sin elementos repetidos) y devuelva un nuevo vector que represente la unión de ambos conjuntos
 * (también sin elementos repetidos).
 */

// Ejemplos de uso
console.log('\n--- Ejemplos de Uso ---');

// Ejemplo del Ejercicio 1: Suma de Vectores
let vector1 = [1, 2, 3];
let vector2 = [4, 5, 6];
console.log('1. Suma de vectores:', sumarVectores(vector1, vector2));
console.log('1. Suma de vectores:', sumarVectores2(vector1, [8,8,8]));

// Ejemplo del Ejercicio 2: Contar Elementos Pares e Impares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('2. Conteo de pares e impares:', contarParesImpares(numeros));
console.log('2. Conteo de pares e impares:', contarParesImpares2(numeros));

// Ejemplo del Ejercicio 3: Ordenar Nombres

let nombres = ['Juan', 'Ana', 'Carlos', 'Beatriz'];
console.log('3. Nombres ordenados:', ordenarNombres(nombres));

// Ejemplo del Ejercicio 4: Calcular Producto
let vector3 = [2, 3, 4];
console.log('4. Producto de elementos:', calcularProducto(vector3));
console.log('4. Producto de elementos:', calcularProducto2(vector3));

// Ejemplo del Ejercicio 5: Unión de Conjuntos
let conjunto1 = new Set([1, 2, 3]);
let conjunto2 = new Set([3, 4, 5]);
console.log('5. Unión de conjuntos:', unionConjuntos(conjunto1, conjunto2));
console.log('5. Unión de conjuntos:', unionConjuntos2(conjunto1, conjunto2));
