//node --watch h:/02-backend/backend-43345/src/01-desafios-entregables/03-desafio/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import ProductManager from '../03-desafio/03-desafio.js';

dotenv.config();

const app = express();
app.use( cors() );

const PORT = process.env.PORT;

const productManager = new ProductManager();

app.get( "/products", async ( req, res ) => {

    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts( limit );
        res.json( products );

    } catch ( error ) {
        console.log( error );
    }

} );

app.get( "/product/:id", async ( req, res ) => {

    try {
        const product = await productManager.getProductById( req.params.id );

        if ( product === 'Producto No Encontrado' ) {
            console.log( 'Producto No Encontrado' );
        } else {
            res.json( product );
        }

    } catch ( error ) {
        console.log( error );
    }

} )

app.get( "/products/category/:category", async ( req, res ) => {

    try {
        const searchedProductsByCategory = await productManager.getProductsByCategory( req.params.category );
        res.send( { searchedProductsByCategory } );

    } catch ( error ) {
        console.log( error );
    }

} )

app.listen( PORT, () => {
    console.log( `Server running on port => ${PORT}` );
} )