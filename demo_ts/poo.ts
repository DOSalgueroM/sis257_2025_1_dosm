export class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

export class Estudiante extends Persona {
  public carnetUniversitario: string;
  constructor(nombre: string, edad: number, carnetUniversitario: string) {
    super(nombre, edad);
    this.carnetUniversitario = carnetUniversitario;
  }

  saludar() {
    super.saludar();
    console.log(`Mi carnet universitario es ${this.carnetUniversitario}`);
  }
}
