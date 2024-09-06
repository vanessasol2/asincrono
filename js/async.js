//importar la funcion mostrarenHTML
import{ mostrarEnHTML } from "./mostrarEnHTML.js";


//funcion de obtener datos
//utilizando async - await 
const obtenerEmpleados = async () => {
    
    const url = "../data/empleados.json"
    const response = await fetch (url)
    const empleados = await response.json()
    //invocar
    mostrarEnHTML(empleados);
}
obtenerEmpleados()