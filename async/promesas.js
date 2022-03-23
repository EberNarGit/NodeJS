/*
    function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+ nombre);
        miCallback(nombre);
    },1000);
}
    *Se deja de utilizar el callback por la promesa 
    *resolve = miCallback
*/
function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        },1000);
    });
    
}

function adios(nombre){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        },1000);
    }); 
}

function hablar(nombre){
    return new Promise( (resolve, reject) =>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        },1000);
    });  
}

console.log("Iniciando proceso...");

hola('Eber')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Proceso terminado.");
    })
    .catch(error=>{
        console.error('Ha habido un error: ');
        console.error(error);
    })