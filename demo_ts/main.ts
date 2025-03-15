let esActivo: boolean = true; // ambito local, dentro de funciones
var esActivo2: boolean = false; // ambito global, fuera de funciones
const esActivo3: boolean = false; // ambito global, fuera de funciones

// number
let entero: number = 6;
let flotante: number = 6.5;
let decimal: number = 6.5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// strings
let nombre: string = "Juan";
let materia: string = "Desarrollo de aplicaciones web";
let mensaje: string = `Hola ${nombre}, bienvenido a ${materia}`;
let concatenacion: string = nombre + " " + materia;
let concatenacion2: string = `${nombre} ${materia}`;
let mayusculas: string = nombre.toUpperCase();
let minusculas: string = materia.toLowerCase();
let longitud: number = nombre.length;
let subcadena: string = mensaje.substring(5, 10);
let reemplazo: string = mensaje.replace(/ /g, "_");
let partes: string[] = mensaje.split(" ");
let repetir: string = nombre.repeat(3);

// arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Juan", "Pedro", "Maria"];
let mixto: (string | number)[] = [1, "Juan", 2, "Pedro"];
let matriz: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let matriz2: Array<Array<number>> = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let longitudArray: number = numeros.length;
let elemento: number = numeros[0];
let ultimo: number = numeros[numeros.length - 1];
let subArray: number[] = numeros.slice(1, 3);
let reemplazoArray: number[] = numeros.map((x) => x * 2);
let filtrado: number[] = numeros.filter((x) => x > 2);
let suma: number = numeros.reduce((a, b) => a + b, 0);
let encontrado: number = numeros.find((x) => x > 2) ?? 0;
let index: number = numeros.findIndex((x) => x > 2);
let incluido: boolean = numeros.includes(3);
let doble: number[] = numeros.map((x) => x * 2);
let factorial: number = numeros.reduce((prev, curr) => prev * curr, 1);
let reversa: number[] = numeros.reverse();
nombres.shift();
nombres.pop();
nombres.push("Fer");

//console.log(nombres);

// tuples
let tupla: [string, number] = ["Juan", 25];
let tupla2: [string, number][] = [
  ["Juan", 25],
  ["Pedro", 30],
  ["Maria", 20],
]; // array de tuplas
//console.log(tupla2);

// enums
enum sexo {
  M = "Masculino",
  F = "Femenino",
}
let genero: sexo = sexo.M;
//console.log(genero);

// any
let variable: any = 5;
variable = "Juan";
variable = true;

// Object
let objeto: object = { nombre: "Juan", edad: 25 };

// estructuras de control
let contiene: boolean = nombres.includes("Fer") ? true : false;
if (nombres.includes("Hola")) contiene = true;
else contiene = false;
//console.log(contiene);

// ovtiene los indices
for (let i in nombres) {
  //console.log("For in: " + i);
}
// obtiene los valores
for (let nombre of nombres) {
  //console.log("For of: " + nombre);
}
// obtiene los valores
nombres.forEach((index) => {
  //console.log("ForEach: " + index);
});

// interfaces
interface Persona2 {
  nombre: string;
  edad: number;
}

// funciones
function sumar(a: number, b: number): number {
  return a + b;
}
function saludar(): void {
  //console.log("Hola");
}
function saludar2(nombre: string): void {
  //console.log("Hola " + nombre);
}
saludar2("Juan");

import { Persona, Estudiante } from "./poo";

let juan = new Persona("Juan", 25);
juan.saludar();

let pedro = new Estudiante("Pedro", 30, "20210001");
pedro.saludar();
