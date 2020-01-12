
/*
 * Esto es un comentario :-)
 * y esto otro! .. igual deberíamos ponerlos juntos
 */
function enviarMensaje (segundo, param1 = 'ou yeah') {
   var a = 'baby';
   var yoda = a;
   var STARWARS = {
      episodio1: 'La amenaza fantasma',
      eposodio2: 'Otra de la que nadie se acuerda',
      episodio3: 'De veras.. ¿por qué la hicieron?',
      mandalorian: 'Al menos aquí sale ' + yoda + ' yoda',
   };

   if (yoda === 'baby') {
      console.warn('SIIII!');
   } else {
      console.warn(STARWARS);
   }
}

enviarMensaje('23');
