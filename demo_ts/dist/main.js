"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let esActivo = true; // ambito local, dentro de funciones
var esActivo2 = false; // ambito global, fuera de funciones
const esActivo3 = false; // ambito global, fuera de funciones
// number
let entero = 6;
let flotante = 6.5;
let decimal = 6.5;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// strings
let nombre = "Juan";
let materia = "Desarrollo de aplicaciones web";
let mensaje = `Hola ${nombre}, bienvenido a ${materia}`;
let concatenacion = nombre + " " + materia;
let concatenacion2 = `${nombre} ${materia}`;
let mayusculas = nombre.toUpperCase();
let minusculas = materia.toLowerCase();
let longitud = nombre.length;
let subcadena = mensaje.substring(5, 10);
let reemplazo = mensaje.replace(/ /g, "_");
let partes = mensaje.split(" ");
let repetir = nombre.repeat(3);
// arrays
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "Pedro", "Maria"];
let mixto = [1, "Juan", 2, "Pedro"];
let matriz = [
    [1, 2],
    [3, 4],
    [5, 6],
];
let matriz2 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
let longitudArray = numeros.length;
let elemento = numeros[0];
let ultimo = numeros[numeros.length - 1];
let subArray = numeros.slice(1, 3);
let reemplazoArray = numeros.map((x) => x * 2);
let filtrado = numeros.filter((x) => x > 2);
let suma = numeros.reduce((a, b) => a + b, 0);
let encontrado = (_a = numeros.find((x) => x > 2)) !== null && _a !== void 0 ? _a : 0;
let index = numeros.findIndex((x) => x > 2);
let incluido = numeros.includes(3);
let doble = numeros.map((x) => x * 2);
let factorial = numeros.reduce((prev, curr) => prev * curr, 1);
let reversa = numeros.reverse();
nombres.shift();
nombres.pop();
nombres.push("Fer");
//console.log(nombres);
// tuples
let tupla = ["Juan", 25];
let tupla2 = [
    ["Juan", 25],
    ["Pedro", 30],
    ["Maria", 20],
]; // array de tuplas
//console.log(tupla2);
// enums
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
let genero = sexo.M;
//console.log(genero);
// any
let variable = 5;
variable = "Juan";
variable = true;
// Object
let objeto = { nombre: "Juan", edad: 25 };
// estructuras de control
let contiene = nombres.includes("Fer") ? true : false;
if (nombres.includes("Hola"))
    contiene = true;
else
    contiene = false;
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
// funciones
function sumar(a, b) {
    return a + b;
}
function saludar() {
    //console.log("Hola");
}
function saludar2(nombre) {
    //console.log("Hola " + nombre);
}
saludar2("Juan");
const poo_1 = require("./poo");
let juan = new poo_1.Persona("Juan", 25);
juan.saludar();
let pedro = new poo_1.Estudiante("Pedro", 30, "20210001");
pedro.saludar();
