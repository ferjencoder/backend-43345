//node --watch h:/02-backend/backend-43345/src/01-desafios-entregables/03-desafio/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import ProductManager from './ProductManager.js';

dotenv.config();

const app = express();
app.use( cors() );

const PORT = process.env.PORT;

const productManager = new ProductManager();

app.get( "/products", async ( req, res ) => {

    const products = await productManager.getProducts();
    res.json( products );

} );

app.get( "/product/:id", async ( req, res ) => {

    const product = await productManager.getProductById( req.params.id );
    res.send( { product } );

} )

app.get( "/products/category/:category", async ( req, res ) => {

    const searchedProductsByCategory = await productManager.
        getProductsByCategory( req.params.category );

    res.send( { searchedProductsByCategory } );
} )

app.listen( PORT, () => {
    console.log( `Server running on port => ${PORT}` );
} )