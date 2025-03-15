"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    constructor(nombre, edad, carnetUniversitario) {
        super(nombre, edad);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        super.saludar();
        console.log(`Mi carnet universitario es ${this.carnetUniversitario}`);
    }
}
exports.Estudiante = Estudiante;
