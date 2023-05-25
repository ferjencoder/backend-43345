

import fs from "fs";
import { v4 as uuidV4 } from 'uuid'

const path = "src/09-after-class/data/products.json";

export default class ManagerProducts {
    consultarProductos = async () => {
        console.log( "existe", fs.existsSync( path ) );
        if ( fs.existsSync( path ) ) {
            const data = await fs.promises.readFile( path, "utf-8" );
            const products = JSON.parse( data );
            return products;
        } else {
            return [];
        }
    };


    crearProducto = async ( info ) => {
        const productos = await this.consultarProductos();

        info.id = uuidV4();

        productos.push( info );

        await fs.promises.writeFile( path, JSON.stringify( productos, null, "\t" ) );

        return info;
    };



    consultarProductoPorId = async ( id ) => {
        const productos = await this.consultarProductos();

        const producto = productos.find( ( producto ) => {
            return producto.id == id;
        } );

        return producto ? producto : "producto no encontrado";
    };
}