window.onload = () => {

    obtenerUsuarios();
}

async function obtenerUsuarios() {

    let url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=obtener';
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
    mostrarUsuarios(datos);
}

async function eliminarUsuarios(ci) {

    let formdada = new FormData();
    formdada.append("ci", ci);
    let url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=eliminar';

    let config = {
        method: 'POST',
        body: formdada
    };

    let respuesta = await fetch(url, config);
    let datos = await respuesta.json();

    console.log(datos);

    if (datos == true) {
        alert('usuario eliminado')
        obtenerUsuarios();
    } else (
        alert('usuario no eliminado')
    )
}




function mostrarUsuarios(usuarios) {

    let tbodyElement = document.querySelector("#tablaUsuarios");
    tbodyElement.innerHTML="";
    for (let i = 0; i < usuarios.length; i++) {

        tbodyElement.innerHTML += `
            <tr>
            <td>${usuarios[i].ci}</td>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellido}</td>
            <td><button onclick="eliminarUsuarios('${usuarios[i].ci}')">Eliminar </button> </td>

            </tr>
            `;


    }

}


