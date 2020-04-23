let socket = io();
     // los on son para escuchar
     socket.on('connect', function() {
        console.log('conectado al servidor');
     });


    socket.on('disconnect', function() {
        console.log('servidor  desconectado');
    });


    // enviar informacion desde el cliente
    socket.emit('enviarMensaje',{
        usuario: 'oscar peña',
        mensaje: 'hola mundo',
        hora: 1234
      }, function(resp){
        console.log('respuesta del servidor', resp)
     });

     // escuchado informacion del servidor
    socket.on('enviarMensaje', function(mensaje) {
     console.log('servidor', mensaje)
     })