

// EJEMPLO EN VIVO
// Crear un servidor con el módulo nativo de nodejs “http”. Setear una respuesta que contenga el mensaje “¡Mi primer hola mundo desde backend!” 
// El servidor debe escuchar en el puerto 8080.  (Correr con nodemon)
// Probar el servidor desde el navegador.
// Hacer algún cambio en código y corroborar que se reinicie automáticamente.
// const http = require( 'http' );


import http from 'http';

const server = http.createServer( ( request, response ) => {
    response.end( 'Mi segundo Hola Mundo desde el backend!' );
} );

server.listen( 8080, () => {
    console.log( 'Listening on port 8080' );
} )