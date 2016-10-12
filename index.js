/*
  - importamos johnny-five
  - inicializamos la board
  - reportamos que la board este lista
  - creamos una nueva instancia Motion con el pin como parametro
  - usamos los eventos ( calibrated, motionstart, motionend, data)
*/

var five = require('johnny-five');
var reqwebtask = require('./request-webtask');
var board, motion;

board = new five.Board();

board.on('ready', function() {
  motion = new five.Motion(7);

  motion.on('calibrated',function(){
    console.log('calibrado');
  });

  motion.on('motionstart', function(){
    console.log('movimiento');
    reqwebtask();
  });

  motion.on('motionend', function(){
    console.log('finalizo');
  });
})
