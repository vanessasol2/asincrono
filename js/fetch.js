// Función para tratar el objeto JSON (empleado)
const mostrarEmpleado = ({ nombre, empresa }) => {
    // Selector para el div "contenido"
    const contenido = document.querySelector('#contenido');
    // Poner contenido HTML en el selector
    contenido.innerHTML = `
    <div style="
        background-color: #f9f9f9; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        padding: 20px; 
        max-width: 500px; 
        margin: 20px auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    ">
        <h2 style="
            color: #333; 
            font-size: 24px; 
            border-bottom: 2px solid #2c3e50; 
            padding-bottom: 10px;
            margin-bottom: 20px;
        ">Empleado del archivo:</h2>
        <p style="
            font-size: 18px; 
            color: #555; 
            margin-bottom: 10px;
        ">Nombre: <strong style="color: #2c3e50;">${nombre}</strong></p>
        <p style="
            font-size: 18px; 
            color: #555;
        ">Empresa: <strong style="color: #2c3e50;">${empresa}</strong></p>
    </div>
    `;
    //console.log(nombre)
    //console.log(empresa)
}

const obtenerDatos = () => {
    // Definir la ruta al archivo de lectura
    const archivo = "../data/empleado.json";

    // Conectar al archivo
    fetch(archivo)
        .then(respuesta => respuesta.json())
        .then(dato => mostrarEmpleado(dato))
        .catch(error => console.log(error));
}

obtenerDatos();


