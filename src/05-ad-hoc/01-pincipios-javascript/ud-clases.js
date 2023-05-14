
'use strict';

const Person = function ( firstName, birthYear ) {
    console.log( this );

}

new Person( 'Fer', 1983 );

// 1. New object {} is created // So first, a new empty object is created.
// 2. function is called, this={} // then afterwards the function is called and in this function call the this keyword will be set to this newly created object.
// 3. {} linked to prototype // So step number three is that this newly created object is linked to a prototype.
// 4. function automatically return {}


