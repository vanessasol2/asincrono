//Definir una promise en js 
const valor = 
    new Promise((resolve , rejected) => {

        //variable de control
        const s = 0
        if(s > 0){
            resolve(s)
        }else{
            rejected(s)
        }
});
//utilizar la promise
//then: en caso de ejecucion del resolve
//      que se debe hacer
//catch: en caso de que se ejecute el rejected
//      que se debe hacer  
valor
    .then(function( dato ){
        console.log(`dato valido: ${dato}`)
    })
    .catch(function(dato){
        console.log(`dato invalido ${dato}`)
    })
console.log(valor)