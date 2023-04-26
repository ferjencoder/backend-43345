
// //REGISTRADOR DE TICKETS DE EVENTOS

class TicketsManager {

    #precioBaseGanancias = 0.15;

    constructor() {
        this.eventos = [];
    }

    retutnEventos () {
        return this.eventos
    }

    agregarEventos (
        nombre,
        lugar,
        precio,
        capacidad = 50,
        fecha = new Date().toLocaleDateString()
    ) {
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseGanancias,
            capacidad,
            fecha: fecha,
            participantes: []
        }

        if ( this.eventos.length === 0 ) {
            evento.id = 1;
        } else {
            evento.id = this.eventos[ this.eventos.length - 1 ].id + 1;
        }

        this.eventos.push( evento );
    }

    agregarUsuarios ( idUsuario, idEvento ) {
        const eventoIndex = this.eventos.findIndex( evento => evento.id === idEvento );

        if ( eventoIndex === -1 ) {
            console.log( "evento no existe" );
        }
        this.eventos[ eventoIndex ].participantes.push( idUsuario );
    }

}

const manejadorDeEventos = new TicketsManager();
manejadorDeEventos.agregarEventos( "event 1", "argentina", 5, 50 );
manejadorDeEventos.agregarUsuarios( 100, 1 );
console.log( manejadorDeEventos.retutnEventos() );

