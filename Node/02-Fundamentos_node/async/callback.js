
function hola(nombre, miCallback){
    setTimeout(function () {
        console.log('Hola '+nombre);
        miCallback(nombre);
    }, 1000);  
}

function adios(nombre, otroCallBack){
    setTimeout(function() {
        console.log('Adios '+nombre);
        otroCallBack();
    }, 1500);
}

console.log("Iniciando el proceso...")
hola('Carlos', function (nombre) {
   adios(nombre, function() {
        console.log('Terminando el proceso...');
    });
});

//hola('Carlos', function(){});
//adios('Carlos', function(){});
