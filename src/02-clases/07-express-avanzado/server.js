

import express from 'express';

const app = express();

app.use( express.json() );

let frase = 'Frase inicial';

app.get( '/api/frase', ( req, res ) => {
    rest.send( { frase } );
} );

app.get( '/api/palabras/:pos', ( req, res ) => {

    const pos = req.params.pos;

    if ( isNaN( pos ) ) return res.send( 400 ).send( { message: 'pos debe ser un número' } );
    const palabras = frase.split( ' ' );

    res.send( { palabra: palabras[ pos - 1 ] } );

} );

app.listen( 8080, () => {
    console.log( 'Server running on port 8080' );
} )

app.post( '/api/palabras/', ( req, res ) => {

    const palabra = req.body.palabra;
    frase = frase + ' ' + palabra;

    res.send( { palabra, pos: frase.split( ' ' ).length } )
} );

app.delete( '/api/frases/:pos', ( req, res ) => {

    const pos = req.params.pos;

    if ( isNaN( pos ) ) return res.send( 400 ).send( { message: 'pos debe ser un número' } );

    const palabras = frase.split( ' ' );

    palabras.splice( pos - 1, 1 );
    frase = palabras.join( ' ' );

    res.send( { frase } )
} );

app.put( '/api/palabras/:pos', ( req, res ) => {
    const pos = req.params.pos;
    const palabraNueva = req.body.palabra;

    if ( isNaN( pos ) ) return res.send( 400 ).send( { message: 'pos debe ser un número' } );

    const palabras = frase.split( ' ' );

    const anterior = palabras[ pos - 1 ];

    palabras[ pos - 1 ] = palabraNueva;

    frase = palabras.join( ' ' );

    res.send( { anterior } );
} )