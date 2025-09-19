window.onload = () => {
    let formElement = document.querySelector("#form");
    formElement.onsubmit = async (e) => {
        e.preventDefault();
        let fromFormData = new FormData(formElement);
        let  url='http://localhost/PROYECTOS/CRUD_usuarios/REPOSITORIOS/BACKEND/CONTROLADOR/controladorUsuarios.php?funcion=agregar';      
        
        let config = {
            method: 'POST', 
            body: fromFormData
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        console.log(datos);

        if(datos==true){
            alert ('usuario creado')
        }else(
            alert ('usuario no creado')
        )
    }
}
