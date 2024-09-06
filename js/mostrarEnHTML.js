export const mostrarEnHTML = (empleados) => {
    const tbody = document.querySelector('#empleados tbody');
    let filas = '';
    empleados.forEach(empleado => {
        const { nombre, empresa, trabajo } = empleado;
        filas += `
        <tr style="background-color: #ffffff; border-bottom: 1px solid #dcdcdc; transition: background-color 0.3s ease;">
            <td style="padding: 12px 15px; text-align: left; color: #333333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px;">${nombre}</td>
            <td style="padding: 12px 15px; text-align: left; color: #333333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px;">${empresa}</td>
            <td style="padding: 12px 15px; text-align: left; color: #333333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px;">${trabajo}</td>
        </tr>
        `;
    });
    tbody.innerHTML = filas;

    // Aplicar estilo al pasar el ratón por encima de las filas
    tbody.querySelectorAll('tr').forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f4f4f4'; // Color de fondo más claro al pasar el ratón
            row.style.cursor = 'pointer'; // Cambiar el cursor a mano
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '#ffffff'; // Color de fondo original
        });
    });
}


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


