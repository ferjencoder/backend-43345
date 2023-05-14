

import fs from 'fs';

const path = 'src/05-after-class/06-after-class/files/Usuarios.json';

export default class UsuariosManager {

    consultarUsuarios = async () => {
        if ( fs.existsSync( path ) ) {
            const data = await fs.promises.readFile( path, 'utf-8' );
            const users = JSON.parse( data );
            return users;
        } else {
            return []
        }
    };

    crearUsuarios = async ( limit ) => {

        const users = await this.consultarUsuarios();

        // saber si el archivo está creado

        if ( users.length === 0 ) {
            info.id = 1;
        } else {
            info.id = users[ users.length - 1 ].id + 1;
        }

        users.push( info )
        await fs.promises.writeFile( path, JSON.stringify( users, null, '\t' ) )

    }

    eliminarUsuarios = async ( id ) => {

        const usuarios = await this.consultarUsuarios();

        const usuariosFiltrados = usuarios.filter( ( usuario ) => {
            return usuario.id != id;
        } );

        await fs.promises.writeFile( path, JSON.stringify( usuariosFiltrados, null, '\t' ) )

    }

    consultarUsuarioPorId = async ( id ) => {

        const usuarios = await this.consultarUsuarios();

        const usuarioBuscado = usuarios.find( ( usuario ) => {
            return usuario.id == id;
        } )

        return usuarioBuscado
            ? usuarioBuscado
            : 'Usuario No Encontrado';
    }

}
