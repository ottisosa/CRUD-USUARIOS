<?php

require_once "../CONEXION/conexion.php";

class usuario
{

    function obtenerUsuarioModelo()
    {
        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "SELECT * FROM usuario;";
        $respuesta = $conn->query($sql);
        $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $usuarios;
    }

    function ordenarPorCi()
    {
        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "SELECT * FROM usuario ORDER BY ci ASC;";
        $respuesta = $conn->query($sql);
        $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $usuarios;
   }

   function ordenarPorNombre()
   {
       $conexion = new conn;
       $conn = $conexion->connection();
       $sql = "SELECT * FROM usuario ORDER BY nombre ASC;";
       $respuesta = $conn->query($sql);
       $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
       return $usuarios;
  }

  function ordenarPorApellido()
  {
      $conexion = new conn;
      $conn = $conexion->connection();
      $sql = "SELECT * FROM usuario ORDER BY apellido ASC;";
      $respuesta = $conn->query($sql);
      $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
      return $usuarios;
 }

    function crearUsuarioModelo($ci,$nombre, $apellido)
    {

        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "INSERT INTO usuario VALUES('$ci','$nombre', '$apellido');";
        $respuesta = $conn->query($sql);
        return $respuesta;
    }

    function eliminarUsuarioModelo($cedula)
    {
        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "DELETE FROM usuario WHERE(ci='$cedula');";
        $respuesta = $conn->query($sql);
        return $respuesta;
    }

    function modificarUsuarioModelo($ci,$nombre,$apellido){

        $conexion = new conn;
        $conn = $conexion->connection();
        $sql = "UPDATE usuario SET nombre = '$nombre', apellido= '$apellido' WHERE ci='$ci'; ";
        $respuesta = $conn->query($sql);
        return $respuesta;

    }
}
