

import { Router } from 'express';


export const routerMascotas = Router();

const mascotas = [];

routerMascotas.get( '/', ( req, res ) => {
    res.send( { mascotas } );
} );

routerMascotas.post( '/', ( req, res ) => {
    const mascota = req.body;
    mascotas.push( mascota );
    res.send( { status: "success" } )
} );

