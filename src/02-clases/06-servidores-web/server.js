
// EJEMPLO DE UNA CONSULTA EN EXPRESS
// Estructurar un servidor basado en express, el cual escuche peticiones en el puerto 8080
// Realizar una función para el método GET en la ruta ‘/saludo’, el cual responderá con “¡Hola a todos, pero ahora desde express!”
// Ejecutar con nodemon y probar en el navegador el endpoint generado


import express from 'express';

const app = express();

// // Crear nueva ruta de tipo GET, apertura un "endpoint"
// // app.get( '/saludo', ( req, res ) => {
// //     res.send( 'Hola a todos, mi primer server de express.' )
// // } );

// app.get( '/bienvenida', ( req, res ) => {
//     res.send( `
//         <h1 style='color: blue;'>
//             Hola a todos, mi primer server de express.
//         </h1>
//     ` )
// } );

// app.get( '/usuario', ( req, res ) => {
//     res.send( {
//         nombre: 'Mariano',
//         apellido: 'Perez',
//         edad: 20,
//         correo: 'juan.perez@google.com'
//     } )
// } );

// // LEARN: El objeto req cuenta con tres propiedades principales: req.query, req.params, req.body.

// // req.params
// // Se utiliza cuando necesitamos obtener elementos dinámicos desde la ruta que está llamando el cliente.
// // Para poder definir un “parámetro” dentro de la ruta a trabajar, basta con colocar el símbolo de dos puntos: antes del parámetro, de esta manera, express reconoce que queremos que ese elemento sea dinámico.

// // Ejemplo:
// // app.get( '/usuario/:id', ( req, res ) => {

// //     console.log( req.params.id );

// //     res.send( `'User id => , ${req.params.id}` )
// // } )


// // EJEMPLO EN VIVO: CASO PRÁCTICO DE USO DE PARAMS
// // Dado un arreglo de objetos de tipo usuario, realizar un servidor en express que permita obtener dichos usuarios.
// // La ruta raíz ‘/’ debe devolver todos los usuarios
// // la ruta /:userId debe devolver sólo al usuario con dicho Id.

const usuarios = [
    { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
    { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv" },
    { "id": 3, "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net" },
    { "id": 4, "name": "Patricia Lebsack", "username": "Karianne", "email": "Julianne.OConner@kory.org" },
]

app.get( "/", ( req, res ) => {
    res.send( { usuarios } );
} )

app.get( "/:idUsuario", ( req, res ) => {

    let idUsuario = req.params.idUsuario;

    let usuario = usuarios.find( ( user ) => {
        return user.id === idUsuario;
    } )
    res.send( { usuario } );
} )

app.listen( 8088, () => {
    console.log( 'Server running on port 8080' );
} )

