window.onload = () => {

    const formulario = document.querySelector("#formularioModificar");
    const controlador = "http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=modificar"
    formulario.onsubmit = async function (e) {
        e.preventDefault();
        const formdata = new FormData(formulario);
        const respuesta = await fetch(controlador, {
            method: "post",
            body: formdata

        })
        const data = await respuesta.json();
        if (data) {
            alert("se modifico el usuario")
            formulario.reset()
            obtenerUsuarios();
        }
        else {
            alert("no se pudo modificar el usuario")
        }

    }
    obtenerUsuarios();
}

let listadeusuarios = []


async function obtenerUsuarios() {

    let url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=obtener';
    let consulta = await fetch(url);
    let datos = await consulta.json();
    listadeusuarios = datos;
    mostrarUsuarios(datos);
}

function mostrarUsuarios(usuarios) {

    let tbodyElement = document.querySelector("#TablaUsuario");
    tbodyElement.innerHTML = "";
    for (let i = 0; i < usuarios.length; i++) {

        tbodyElement.innerHTML += `
            <tr>
            <td>${usuarios[i].ci}</td>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellido}</td>
            <td><button onclick="modificarusuario('${usuarios[i].ci}')">Modificar </button> </td>
            </tr>
            `;


    }

}

function modificarusuario(ci) {
    const user = listadeusuarios.find(user => user.ci === ci);


    document.querySelector("#ci").value = user.ci;
    document.querySelector("#nombre").value = user.nombre;
    document.querySelector("#apellido").value = user.apellido;
}
