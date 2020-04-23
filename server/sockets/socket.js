
const { io } =require('../server');
 
io.on('connection',(cliente) => {
    console.log('usuario conectado');

    cliente.emit('enviarMensaje',{
        usuario: 'administrador',
        mensaje: 'bienvenido'
    });

    cliente.on('disconnect', () =>{
        console.log('usuario desconectado');
    });


    // escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log( data)

        cliente.broadcast.emit('enviarMensaje',{data})

        // if(data.usuario){
        //     callback({
        //         resp: 'todo slio bien'
        //     });
        // }else{
        //     callback({
        //         resp:'todo salio mallll!!!!!!!!!!!!!'
        //     });
        // }
        
    });
});