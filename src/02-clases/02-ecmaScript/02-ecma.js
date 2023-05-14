

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

const newArray = [];

objetos.forEach( obj => {
    Object.keys( obj ).forEach( key => {
        if ( !newArray.includes( key ) ) {
            newArray.push( key );
        }
    } );
} );

console.log( 'newArray', newArray );
// Output: ["manzanas", "peras", "carne", "jugos", "dulces", "sandias", "huevos", "panes"]

let sum = 0;

objetos.forEach( obj => {
    Object.values( obj ).forEach( value => {
        sum += value;
    } );
} );

console.log( sum );
// Output: 27


