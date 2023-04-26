
// The only difference between a regular function,
// and a constructor function is that we call the constructor
// using the new keyword.

class Contador {

    constructor( responsable ) {
        this.responsable = responsable;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable = () => {
        return this.responsable;
    };

    contar = () => {
        this.contador++;
        Contador.contadorGlobal++;
    };

    getCuentaIndividual = () => {
        return this.contador;
    };

    getCuentaGlobal = () => {
        return Contador.contadorGlobal;
    };

}

const cuenta1 = new Contador( 'María' );
cuenta1.contar();
cuenta1.contar();

console.log( cuenta1.getCuentaIndividual() ); // 2
console.log( cuenta1.getCuentaGlobal() );; // 2

const cuenta2 = new Contador( 'Juan' );
cuenta2.contar();

console.log( cuenta2.getCuentaIndividual() ); // 1
console.log( cuenta2.getCuentaGlobal() ); // 3

const cuenta3 = new Contador( 'Pedro' );
cuenta3.contar();
cuenta3.contar();
cuenta3.contar();
cuenta3.contar();

console.log( cuenta3.getCuentaIndividual() ); // 4
console.log( cuenta3.getCuentaGlobal() ); // 7