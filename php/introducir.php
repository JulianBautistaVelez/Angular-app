<?php
	require_once('bd_taller.php');
	require_once('utilidades.php');
	global $bd_taller;
	global $utilidades;
	error_reporting(E_ALL);
	ini_set('display_errors',1);
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);
    
    if ($_SERVER['REQUEST_METHOD'] == 'PUT' && empty($_POST)){
	//parse_str(file_get_contents("php://input"),$post_vars);
    $_POST = json_decode(file_get_contents('php://input'), true);
    //print_r($_PUT);
    }
    
    //foreach($_POST as $dato){print_r($dato."    ");}
    
    /*$method = $_SERVER['REQUEST_METHOD'];
	if ('PUT' === $method) {
		parse_str(file_get_contents('php://input'), $_PUT);
		var_dump($_PUT); //$_PUT contains put fields 
	}*/
	
	
		if(!empty($_GET)){
		switch ($_GET["tabla"]){
			case "cuentas": inserta_en_cuentas();
			break;
			case "telas": inserta_en_telas();
			break;
			
			}
		}
	//else echo "GET ESTA VACIO.....";
	
	if(!empty($_POST)){
		switch ($_POST["tabla"]){
			case "clientes": inserta_en_clientes();
			break;
			case "dinero": inserta_en_dinero();
			break;
			case "movimientos": inserta_en_movimientos();
			break;
			case "telas": inserta_en_telas();
			break;
			case "edita_tela": edita_tela();
			break;
			case "edita_cliente": edita_cliente();
			break;
			case "crea_factura": crea_factura();
			break;
			
			}
	}
	//else echo "POST ESTA VACIO.....";
	/*$_PUT IS NOT A SUPERGLOBAL */
	/*if(!empty($_PUT)){
		switch ($_PUT["tabla"]){
			case "edita_cliente": edita_cliente();
			break;			
			}
	}*/
	function crea_factura(){
		global $utilidades;
		$utilidades->crea_factura($_POST);
		//print_r($_POST);
	}
	
	function edita_cliente()
	{
		global $bd_taller;
		$id = $_POST["id"];
		
		$cliente = ["nombre"=>$_POST["nom"],
					"direccion"=>$_POST["dir"],
					"telefono"=>$_POST["tel"],
					"trabajos"=>$_POST["trab"],
					"presupuestos"=>$_POST["pres"],
					"comentarios"=>$_POST["com"]];
					
		$query= "UPDATE clientes SET 
		nombre='".$cliente["nombre"]."', 
		direccion='".$cliente["direccion"]."', 
		telefono='".$cliente["telefono"]."', 
		comentarios='".$cliente["comentarios"]."'
		WHERE id='".$id."'";
		 
		print_r($query);
		$resultado = $bd_taller->insert($query);
		
	}
	
	function inserta_en_clientes()
	{
		global $bd_taller;
		
		print_r($_POST);
			
		$cliente = ["nombre"=>$_POST["nom"],
					"direccion"=>$_POST["dir"],
					"telefono"=>$_POST["tel"],
					"trabajos"=>$_POST["trab"],
					"presupuestos"=>$_POST["pres"],
					"comentarios"=>$_POST["com"]];
						
		//print_r($cliente);
			
		$query_fields = "INSERT INTO clientes (";
		$query_values = "VALUES ('";
			
		if(!empty($_POST["nom"]))
		{
			$query_fields = $query_fields."nombre";
			$query_values=$query_values.$cliente["nombre"];
		};
		if(!empty($_POST["dir"]))
		{
			$query_fields = $query_fields.",direccion";
			$query_values=$query_values."','".$cliente["direccion"];
		};
		if(!empty($_POST["tel"]))
		{
			$query_fields = $query_fields.",telefono";
			$query_values=$query_values."','".$cliente["telefono"];
		};
		if(!empty($_POST["trab"]))
		{
			$query_fields = $query_fields.",trabajos";
			$query_values=$query_values."','".$cliente["trabajos"];
		};
		if(!empty($_POST["pres"]))
		{
			$query_fields = $query_fields.",presupuestos";
			$query_values=$query_values."','".$cliente["presupuestos"];
		};
		if(!empty($_POST["com"]))
		{
			$query_fields = $query_fields.",comentarios";
			$query_values=$query_values."','".$cliente["comentarios"];
		};
		
		$query_fields=$query_fields.")";
		$query_values=$query_values."');";
		
		$query = $query_fields.$query_values;
		$resultado = $bd_taller->insert($query);
		//print_r($query);
		//formatea_envia($resultado);
		
	};
		
		
	function inserta_en_telas()
	{
		global $bd_taller;
		$tela = ["nombre"=>$_POST["nom"],
				"precio_proveedor"=>$_POST["prec"],
				"pvp"=>$_POST["pvp"],
				"tipo"=>$_POST['tip'],
				"comentarios"=>$_POST["com"],
				"proveedor"=>$_POST["prov"]];
				
		$query_fields="INSERT INTO telas
				(";
		$query_values="VALUES ('";
		
		if(!empty($_POST["nom"]))
		{
			$query_fields = $query_fields."nombre";
			$query_values=$query_values.$tela["nombre"];
		}
		if(!empty($_POST["prec"]))
		{
			$query_fields = $query_fields.", precio_proveedor";
			$query_values=$query_values."','".$tela["precio_proveedor"];
		}
		if(!empty($_POST["pvp"]))
		{
			$query_fields = $query_fields.", pvp";
			$query_values=$query_values."','".$tela["pvp"];
		}
		if(!empty($_POST["tip"]))
		{
			$query_fields = $query_fields.", tipo";
			$query_values=$query_values."','".$tela["tipo"];
		}
		if(!empty($_POST["com"]))
		{
			$query_fields = $query_fields.", comentarios";
			$query_values=$query_values."','".$tela[" comentarios"];
		}
		if(!empty($_POST["prov"]))
		{
			$query_fields = $query_fields.", proveedor";
			$query_values=$query_values."','".$tela["proveedor"];
		}
		
		$query_fields=$query_fields.")";
		$query_values=$query_values."');";
		
		$query = $query_fields.$query_values;
		print_r($query);
		$resultado = $bd_taller->insert($query);
			
			
	};
		
	function edita_tela(){
		global $bd_taller;
		$id = $_POST["id"];
		
		$tela = ["nombre"=>$_POST["nom"],
				"precio_proveedor"=>$_POST["prec"],
				"pvp"=>$_POST["pvp"],
				"tipo"=>$_POST['tip'],
				"comentarios"=>$_POST["com"],
				"proveedor"=>$_POST["prov"]];
					
		$query= "UPDATE telas SET 
		nombre='".$tela["nombre"]."', 
		precio_proveedor='".$tela["precio_proveedor"]."', 
		pvp='".$tela["pvp"]."', 
		tipo='".$tela["tipo"]."', 
		proveedor='".$tela["proveedor"]."', 
		comentarios='".$tela["comentarios"]."'
		WHERE id='".$id."'";
		 
		print_r($query);
		$resultado = $bd_taller->insert($query);
	
		}

		function inserta_en_movimientos()
		{
			global $bd_taller;
			global $utilidades;
			
			$movimiento = ["concepto"=>$_POST["con"],
					"tipo"=>$_POST["tipo"],
					"valor"=>$_POST["val"],
					"caja_banco"=>$_POST["c_b"]];
			
			$query_fields= "INSERT INTO movimientos (";	
			$query_values= "VALUES ('";
			
			if(!empty($_POST["tipo"]))
			{
				$query_fields = $query_fields."tipo";
				$query_values=$query_values.$movimiento["tipo"];
			};
			if(!empty($_POST["con"]))
			{
				$query_fields = $query_fields.",concepto"; 
				$query_values=$query_values."','".$movimiento["concepto"];
			};	
			if(!empty($_POST["val"]))
			{
				$query_fields = $query_fields.",valor";
				$query_values=$query_values."','".$movimiento["valor"];
			};	
			if(!empty($_POST["c_b"]))
			{
				$query_fields = $query_fields.",caja_banco";
				$query_values=$query_values."','".$movimiento["caja_banco"];
			};	
			
			$query_fields=$query_fields.")";
			$query_values=$query_values."');";
				
			$query = $query_fields.$query_values;		
			//print_r($query);
			$resultado = $bd_taller->insert($query);
			
			if($resultado){
				$resultado = $utilidades->actualizaBancoCaja($movimiento["tipo"], $movimiento["valor"], $movimiento["caja_banco"]);
				}
			
			
		};
		



	

?>
