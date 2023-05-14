

// const fs = require( 'fs' );
import fs from 'fs';

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();
const path = './Users.json';

export default class Manager {

    constructor() {
        console.log( 'Manager' );
        this.users = [];
    }

    getUsers = async () => {
        if ( fs.existsSync() ) {
            const data = await fs.promises.readFile( path, 'utf-8' );
            console.log( data );
            const users = JSON.parse( data );
            return users
        } else {
            return [];
        }
    }

    crearUsuarios = async ( info ) => {
        const users = await this.getUsers();
        if ( users.length == 0 ) {
            info.id = 1
        } else {
            info.id = users[ users.length - 1 ].id + 1;
        }
        users.push( info );
        await fs.promises.writeFile( path, JSON.stringify( users, null, '\t' ) )
    }

    addUser (
        firstName,
        lastName,
        age,
        course,
    ) {
        if ( !firstName || !lastName || !age || !course ) {
            console.warn( `Missing product info (firstName, lastName, age, course)` );
        }

        const user = {
            firstName,
            lastName,
            age,
            course
        }

        const userIndex = this.users.findIndex(
            user => user.id === id
        );

        if ( userIndex >= 0 ) {
            console.error( "Msg from ferJen: Usuario already exists" );
            return false;
        };

        if ( this.users.length === 0 ) {
            user.id = 1;
        } else {
            user.id = this.users[ this.users.length - 1 ].id + 1;
        }

        this.users.push( user );


        fs.writeFile( path, JSON.stringify( user ), ( error ) => {

            if ( error ) return console.log( error );

            fs.readFile( path, 'utf-8', ( error, resultado ) => {
                if ( error ) return console.log( error );
                console.log( resultado );

            } );
        } );

        return user;
    }
}

const userManager = new Manager();
userManager.addUser(
    'Micky-1',
    'Rourke-1',
    '45-1',
    'neural links'
);