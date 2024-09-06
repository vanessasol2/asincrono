


//definir funcion de conecciono 
const obtenerEmpleados = () =>{
    const url ='../data/empleados.json';
    fetch(url)
    .then(res => res.json())
    .then(data => mostrarEnHTML(data))
    .catch(err => console.log(err));
}



//selector al boton
const btnCargarJSON =
    document.querySelector('#cargarJSON')
//añadir evento click al boton
btnCargarJSON.addEventListener('click',
          obtenerEmpleados)
