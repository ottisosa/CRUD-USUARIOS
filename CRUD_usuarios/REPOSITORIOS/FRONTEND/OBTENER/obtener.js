window.onload = () => {

    obtenerUsuarios();
}
    
    async function obtenerUsuarios(){

        let  url='http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=obtener';      
        let consulta = await fetch(url);
        let datos = await consulta.json();
        console.log (datos);
        mostrarUsuarios(datos);
    }
    
    function mostrarUsuarios(usuarios){

        let tbodyElement = document.querySelector("#tablaUsuarios");
        tbodyElement.innerHTML = "";

        for(let i=0; i < usuarios.length;i++){

            tbodyElement.innerHTML+=`
            <tr>
            <td>${usuarios[i].ci}</td>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellido}</td>
            </tr>
            `;


        }

        let filter = document.querySelector("#selector")   //  query selector del selector para ordenar las tablas por nombre, fecha y precio  //

        filter.onchange = async () => {      
    
            let valor = filter.options[filter.selectedIndex].value;  
    
    
            let url;
    
            switch (valor) {             //  switch que segun la variable value cambia la ruta que lleva a la funcion con la consulta SQL  //
    

                
                case "ci":
                    url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=ordenCi';
                    break;
                case "nombre":
                    url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=ordenNom';
                    break;
                case "apellido":
                    url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=ordenApe';
                    break;
                default:
                    url = 'http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=ordenCi';
            }
            try {
                let query = await fetch(url);
                let datos = await query.json();     
                mostrarUsuarios(datos);
            } catch (error) {
                console.error('Error al mostrar los Datos :(', error);     
            }
    
        }

    }
