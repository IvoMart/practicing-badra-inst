 /// Ejercicio 1: Hola Mundo 
 // Escribe un programa que imprima "Hola, Mundo!" en la consola.
const ecribeConsola = ()=> console.log('Hola Mundo')

 /// Ejercicio 2: Suma de dos números 
 // Escribe un programa que solicite al usuario dos números y los sume.

const realizaSuma = () => {
   const sumar = (num1, num2 ) => {
      return num1 + num2
   }
   let num1 = parseInt(prompt("ingrese el primer número de la suma a continiación: "))
   let num2 = parseInt(prompt("ingrese otro número a continiación: "))

   alert(sumar(num1, num2))
}

 /// Ejercicio 3: Par o lmpar 
 // Escribe un programa que determine si un número ingresado por el usuario es par o impar.

const determinarNumeroPar = () => {
   const esPar = (numero) => numero % 2 === 0
   const numero = parseInt(prompt("ingrese el número para comprobar si es Par o Impar: "))

   if (esPar(numero))
      alert("El numero "+ numero + " es par.")
   
   alert("El numero "+ numero + " es impar.")
} 

 /// Ejercicio 4: Máximo de tres números 
 // Escribe un programa que solicite al usuario tres números y determine cuál es el mayor.

const hallarMaximo = () => {
   alert("Hallaremos el valor máximo de tres números ingresados.")
   let num1 = parseInt(prompt("ingrese el primer número a continiación: "))
   let num2 = parseInt(prompt("ingrese otro número a continiación: "))
   let num3 = parseInt(prompt("ingrese el último número a continiación: "))
   const max = (num1, num2, num3 ) => {
      if(num1 < num2) {
         if (num2 < num3)
            return num3
         return num2
      }
      return num1
   }
   alert(max(num1, num2, num3))
}

 /// Ejercicio 5: Factorial de un número 
 // Escribe un programa que calcule el factorial de un número ingresado por el usuario.

const hallarFactorial = () => {
   const factorial = (num) => {
      if (num === 0 || num === 1) {
        return 1;
      }
      return num * factorial(num - 1);
    }
   let num_ = parseInt(prompt("ingrese un número a continiación: "))
    
   const result = factorial(num_);
   console.log(`El Factorial de ${num_} es: ${result}`);
}
 
 /// Ejercicio 6: Contar vocales en una cadena 
 // Escribe un programa que cuente el número de vocales en una cadena ingresada por el usuario.
 
const contarVocales = () => {
   const vocalesEnTexto = (texto) => {
      const vocales = 'aeiouAEIOU';
      let contador = 0;
      
      for (let i = 0; i < texto.length; i++) {
         if (vocales.includes(texto[i])) {
            contador++;
         }
      }
      
      return contador;
   }

   let versos = prompt("Ingresar un texto a continuación. Se contarán las vocales.")

   console.warn(`El texto ingresado ${versos} tiene ${vocalesEnTexto(versos)} vocales.`)
} 

 /// Ejercicio 7: Numeros primos 
 // Escribe un programa que determine si un número ingresado por el usuario es primo.
 
 /// Ejercicio 8: Serie de Fibonacci 
 // Escribe un programa que genere la serie de Fibonacci hasta un número n ingresado por el usuario.
 
 /// Ejercicio 9: Invertir una cadena 
 // Escribe un programa que invierta una cadena de texto ingresada por el usuario.
 
 /// Ejercicio 10: Suma de dígitos 
 // Escribe un programa que sume los dígitos de un número entero ingresado por el usuario.