

import express from 'express';
import cors from 'cors';
import { productManager } from './productManager';

const app = express();
const router = express.Router();

app.use( cors() );
app.use( '/api', router );

router.get( '/products', async ( req, res ) => {

    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts( limit );
        res.status( 200 ).json( products );

    } catch ( error ) {
        console.log( error );
        res.status( 500 ).send( { status: 'error', error: 'Something went wrong' } );
    }
} );

const cartManager = new CartManager();

app.post( "/api/carts", async ( req, res ) => {
    try {
        const newCart = await cartManager.createCart();
        res.status( 201 ).json( newCart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.get( "/api/carts/:cid", async ( req, res ) => {
    try {
        const cart = await cartManager.getCart( req.params.cid );
        res.json( cart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.post( "/api/carts/:cid/products/:pid", async ( req, res ) => {
    try {
        const updatedCart = await cartManager.addProduct( req.params.cid, req.params.pid );
        res.json( updatedCart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.listen( 3000, () => {
    console.log( 'Server listening on port 3000' );
} );

module.exports = router;