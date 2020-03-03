<?php
	error_reporting(E_ALL);
	ini_set('display_errors',1);

	if(!class_exists("clase_bd_taller")){
		class clase_bd_taller{
		protected $mysqli;
		protected $xml;
		protected $direccion_bd = "YOUR DB URL HERE";
		protected $usuario_bd = "YOUR DB USER HERE";
		protected $contrasenya_bd ="YOUR BD PASSWORD HERE";
		protected $nombre_bd = "YOUR DB NAME HERE";
		
			public function __construct(){
				global $mysqli;
				global $xml;
				//global $direccion_bd;
				//global $usuario_bd;
				//global $contrasenya_bd;
				session_start();
				
				

				//$xml = simplexml_load_file('datos_xml/bd_info.xml');
				$mysqli = new mysqli($this->direccion_bd,$this->usuario_bd,$this->contrasenya_bd);

				if($mysqli->connect_errno){
					printf("problema al conectar con la base de datos: %s\n",$mysqli->connect_errno);
				}
				/*AQUI SE HA DE COMPROBAR SI LA BASE DE DATOS ESTA CREADA Y DE NO
				* SER ASI DEBE CREARSE */
					
				$resultado = $mysqli->select_db($nombre_bd);
				
				if(!$resultado){
					printf("no existia la base de datos %s\n ",$mysqli->errno);
					clase_bd_taller::crea_bd();	
					clase_bd_taller::crea_tabla_clientes();
					clase_bd_taller::crea_tabla_trabajos();	
					clase_bd_taller::crea_tabla_cuentas();
					clase_bd_taller::crea_tabla_movimientos();
					clase_bd_taller::crea_tabla_telas();
					clase_bd_taller::crea_tabla_dinero();
					$_SESSION['primer_ingreso']=true;
				}				
				return $mysqli;
			}
			
			function crea_bd(){
				global $mysqli;
				$consulta = "CREATE DATABASE ".$nombre_bd;
				$resultado = $mysqli->query($consulta);
				if(!$resultado){printf("Error creando la base de datos, error numero = %s\n ",$this->conexion->errno);}	
				else {printf("base de datos creada = %s\n ",$resultado);}
				$mysqli->select_db($this->nombre_bd);
					
			}
			
			function crea_tabla_clientes(){
				global $mysqli;
				$consulta = "CREATE TABLE clientes ( 
							 id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							 nombre VARCHAR(300) NOT NULL, 
							 direccion VARCHAR(500) , 
							 telefono INT(10) NOT NULL,
							 trabajos VARCHAR(500), 
							 presupuestos VARCHAR(500), 
							 comentarios VARCHAR(1000),
							 fecha TIMESTAMP)";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla clientes, error numero = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla clientes creada ");}
				
			}
			
			function crea_tabla_trabajos(){
				global $mysqli;
				$consulta = "CREATE TABLE trabajos ( 
							 id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							 fecha TIMESTAMP,
							 precio FLOAT(8,2),
							 coste_mat FLOAT(8,2),
							 tiempo_trab FLOAT(2,2),
							 cliente VARCHAR(300),
							 estado VARCHAR(20),
							 fact BOOLEAN,
							 fotos_link VARCHAR(1000),
							 realizado BOOLEAN)";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla trabajos, error número = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla trabajos creada");}
				
			}
			
			function crea_tabla_cuentas(){
				global $mysqli;
				$consulta = "CREATE TABLE cuentas ( 
							 disp_banco DECIMAL(8,2),
							 disp_caja DECIMAL(8,2))";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla cuentas, error número = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla cuentas creada");}
				
			}
			
			function crea_tabla_movimientos(){
				global $mysqli;
				$consulta = "CREATE TABLE movimientos (
							id int(10) NOT NULL AUTO INCREMENT PRIMARY KEY,
							concepto VARCHAR(500),
							tipo VARCHAR(7),
							valor DECIMAL(7,2) NOT NULL,
							caja_banco VARCHAR(5),
							fecha TIMESTAMP)";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla movimientos, error número = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla movimientos creada");}
				
			}
			
			function crea_tabla_dinero(){
				global $mysqli;
				$consulta = "CREATE TABLE dinero (
							id int(10) NOT NULL AUTO INCREMENT PRIMARY KEY,
							banco decimal(7,2),
							caja decimal(7,2),
							fecha TIMESTAMP)";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla movimientos, error número = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla movimientos creada");}
				
			}
			
			function crea_tabla_telas(){
				global $mysqli;
				$consulta = "CREATE TABLE telas ( 
							 id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							 fecha_ad TIMESTAMP,
							 nombre VARCHAR(200),
							 precio_proveedor FLOAT(7,2),
							 pvp FLOAT(7,2),
							 tipo VARCHAR(20),
							 comentarios VARCHAR(300),
							 proveedor VARCHAR(300))";

				$resultado = $mysqli->query($consulta);
				
				if(!$resultado){printf("Error creando la tabla telas, error número = %s\n ",$this->conexion->errno);}	
				else {printf("Tabla telas creada");}
				
			}
			
			
			public function insert($consulta){
				global $mysqli;

				$resultado= $mysqli->query($consulta);
				if(!$resultado){printf("no se ha podido insertar %d ", $mysqli->errno);}
				return $resultado;
				
			}
			
			public function select($consulta){
			global $mysqli;
				$result= $mysqli->query($consulta);
				
				if(!$result){printf("Error consultando, error número = %s\n ",$mysqli->errno);}
				//guardar el resultado en un array, pasa de ser un objeto mysql a un array de datos 
				while($object = $result->fetch_object()){
				$resultado[] = $object;	
				//print_r($resultado);		
				}
				return $resultado;
			}
			
			public function delete($consulta){
			global $mysqli;

				$resultado= $mysqli->query($consulta);
				if(!$resultado){printf("no se ha podido eliminar %d", $mysqli->errno);}
				return $resultado;
				
			}
			
			public function update($consulta){
			global $mysqli;

				$resultado= $mysqli->query($consulta);
				if(!$resultado){printf("no se ha podido actualizar %d", $mysqli->errno);}
				return $resultado;
				
			}
			
			
				
		}
	}
	//INSTANCIA UN OBJETO DE LA CLASE AL EJECUTARSE; AHORA NO NECESITA CREAR UN OBJETO EN CADA SCRIPT QUE LO LLAME
	//SOLO SE DEBE HACER REFERENCIA A LA VARIABLE GLOBAL $bd_taller DE LA FORMA  global $bd_taller
	$bd_taller= new clase_bd_taller();
	
	
?>
