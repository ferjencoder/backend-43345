

import fs from "fs";
import { v4 as uuidV4 } from "uuid";

const path = "src/classes/files/carts.json";

export default class ManagerCarts {
    consultarCarts = async () => {
        console.log( "existe", fs.existsSync( path ) );
        if ( fs.existsSync( path ) ) {
            const data = await fs.promises.readFile( path, "utf-8" );
            const carts = JSON.parse( data );
            return carts;
        } else {
            return [];
        }
    };

    crearCart = async () => {
        const carts = await this.consultarCarts();
        carts.push( { id: uuidV4(), products: [] } );
        return await fs.promises.writeFile( path, JSON.stringify( carts, null, "\t" ) );
    };

    consultarCartPorId = async ( id ) => {
        const carts = await this.consultarCarts();

        const cart = carts.find( ( cart ) => {
            return cart.id == id;
        } );

        return cart ? cart : "producto no encontrado";
    };
};