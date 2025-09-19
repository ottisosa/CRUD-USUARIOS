<?php

header("Access-Control-Allow-Origin:*");

class conn{

    function connection(){

    $host = "localhost";
    $usuario = "root";
    $password = "";  
    $bd = "crudusuarios";    
    $puerto = 3306;  
    $conn = new mysqli($host, $usuario, $password, $bd, $puerto);   

    return $conn;
    
}


}

?>