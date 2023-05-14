

import express from 'express';

import UsuariosManager from './UsuariosManager';


const app = express();

const usuariosManager = new UsuariosManager();
// Endpoint que va a leer el file y da todos los ususarios

app.get( '/usuarios', async ( req, res ) => {



    const usuarios = await usuariosManager.consultarUsuarios( req.query.limit );

    //TODO:  agregar que limit

    res.send( usuarios );
} )

app.get( '/usuarios/:id', async ( req, res ) => {
    const usuario = usuariosManager.consultarUsuarioPorId( req.params.id );
    res.send( usuario );
} )

app.listen( 8080, () => {
    console.log( 'servidor working on 8080' );
} )


