


import { Router } from 'express';



export const routerUsuarios = Router();

const users = [];

routerUsuarios.get( '/', ( req, res ) => {
    res.send( { users } );
} );

routerUsuarios.get( '/mascotas', ( req, res ) => {
    res.send( { users } );
} );

routerUsuarios.post( '/', ( req, res ) => {
    const user = req.body;
    users.push( user );
    res.send( { status: "success" } )
} );

