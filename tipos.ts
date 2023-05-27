const operations = ['suma', 'resta', 'multiplicacion', 'division'];

const calculator = (a: number, b: number, op: string): number => {
    switch (op) {
        case 'suma': {
            return a + b;
        }
        case 'resta': {
            return a - b;
        }
        case 'multiplicacion': {
            return a * b;
        }
        case 'division': {
            if (b !== 0) {
                return a / b;
            } 
            throw new Error('No se puede dividir por cero');
        }
        default: {
            throw new Error('Operación no válida');
        }
    }
}

console.log(calculator(0, 0, 'division')); // Imprime 3
