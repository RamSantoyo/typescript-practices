const personas: Persona[] = [];

class Persona {
    nombre: string;
    edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const agregarPersona = (nombre: string, edad: number) => {
    let person = new Persona(nombre, edad);
    personas.push(person);
}

// Ejemplo de uso
agregarPersona('Juan', 25);
agregarPersona('María', 30);


console.log(personas);