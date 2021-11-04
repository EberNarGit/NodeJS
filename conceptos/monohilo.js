console.log('Hola Mundo! :)');

let i=0;
setInterval(function(){
    console.log(i);
    i++;

    if(i === 5){
        var a = 3+z;
        //lo peligroso de que Node.js sea monohilo
        //es que cuando hay un problema o error se para
        //por completo nuestro proceso asi que hay que manejarlo con cuidado
    }
}, 1000);

console.log('Seguna instrucción'); //ejecuta todas las intruciones log
//despues de ejecutarla ejecuta la funcion de forma asincrona
