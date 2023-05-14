


const mostrarLista = ( elementos ) => {
    if ( elementos.length === 0 ) return 'Lista vacía';
    elementos.forEach( elemento => console.log( elemento ) );
};

console.log( '***Prueba Fallida***' );
console.log( mostrarLista( [] ) );


console.log( '***Prueba Existoras***' );
console.log( mostrarLista( [ 1, 2, 3, 4, 5 ] ) );
