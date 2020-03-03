<?php
	require_once('bd_taller.php');
	require_once('utilidades.php');
	global $bd_taller;
	global $utilidades;
	
	/*leer el $_GET y decidir que tabla utilizar*/
	if ($_SERVER['REQUEST_METHOD'] == 'GET' && empty($_GET))
	$_GET = json_decode(file_get_contents('php://input'), true);
	
	   
	
	if(!empty($_GET)){
		
		switch ($_GET["tabla"]){
			case "clientes": consultar_clientes(); 
			break;
			case "clientes_rec": consultar_clientes_recientes();
			break;
			case "consultar_telas": consultar_telas();
			break;
			case "busca_en_telas":buscar_en_telas();
			break;
			case "movimientos": consultar_movimientos();
			break;
			case "ingresos": consultar_ingresos();
			break;
			case "gastos": consultar_gastos();
			break;
			case "mov_rec": consultar_movimientos_recientes();
			break;
			case "din_disp": consultar_dinero_disponible();
			break;
			case "clientes_by_id":consultar_clientes_id();
			break;
			case "gastos_stats":consultar_gastos_stats();
			break;
			case "ingresos_stats":consultar_ingresos_stats();
			break;
		
			
			}
	}
	//else echo "GET ESTA VACIO.....";
	
	function consultar_gastos_stats(){
		global $utilidades;
		
		$resultado = $utilidades->getDataGastos();
		formatea_envia($resultado);
		
	}
	
	function consultar_ingresos_stats(){
		global $utilidades;
		
		$resultado = $utilidades->getDataIngresos();
		formatea_envia($resultado);
		
	}
	

	function consultar_clientes(){
			global $bd_taller;
			
			
			if(!empty($_GET['consulta']))
			{
				$consulta =$_GET["consulta"];
				$query = "SELECT * FROM clientes WHERE nombre LIKE '%".$consulta."%' 
				UNION SELECT * FROM clientes WHERE direccion LIKE '%".$consulta."%' 
				UNION SELECT * FROM clientes WHERE telefono LIKE '%".$consulta."%' 
				UNION SELECT * FROM clientes WHERE trabajos LIKE '%".$consulta."%' 
				UNION SELECT * FROM clientes WHERE presupuestos LIKE '%".$consulta."%' 
				UNION SELECT * FROM clientes WHERE direccion LIKE '%".$consulta."%'";
			}
			else $query="SELECT * FROM clientes";
			
			$resultado = $bd_taller->select($query);
			formatea_envia($resultado);
			
		};
		
	function consultar_clientes_id(){
			global $bd_taller;
			
				$id =$_GET["id"];
				$query = "SELECT * FROM clientes WHERE id LIKE '".$id."'";
			
			$resultado = $bd_taller->select($query);
			formatea_envia($resultado);
			
		};
		
	function consultar_clientes_recientes()
		{
			global $bd_taller;
			
			if(!empty($_GET['ult'])){
				$cantidad = $_GET['ult'];
				$query ="SELECT * FROM clientes ORDER BY fecha DESC LIMIT ".$cantidad;
			}
			else $query ="SELECT * FROM clientes ORDER BY fecha DESC LIMIT 5";
			
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		}
		
		function consultar_telas()
		{
			global $bd_taller;
			
			$query = "SELECT * FROM telas ORDER BY nombre";
			
			$resultado = $bd_taller->select($query);
			formatea_envia($resultado);
			
		};
		
		function buscar_en_telas(){
			global $bd_taller;
			
			$consulta =$_GET["consulta"];
			$query = "SELECT * FROM telas WHERE nombre LIKE '%".$consulta."%' 
			UNION SELECT * FROM telas WHERE precio_proveedor LIKE '%".$consulta."%' 
			UNION SELECT * FROM telas WHERE tipo LIKE '%".$consulta."%' 
			UNION SELECT * FROM telas WHERE pvp LIKE '%".$consulta."%' 
			UNION SELECT * FROM telas WHERE comentarios LIKE '%".$consulta."%'  
			UNION SELECT * FROM telas WHERE proveedor LIKE '%".$consulta."%'";
			
			$resultado = $bd_taller->select($query);
			formatea_envia($resultado);
			
		};
		
		function consultar_movimientos(){
			global $bd_taller;
			$query = "SELECT * FROM movimientos ORDER BY fecha DESC";
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		};
		
		function consultar_ingresos(){
			global $bd_taller;
			$query = "SELECT * FROM movimientos WHERE tipo = 'ingreso' ORDER BY fecha DESC";
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		};
		function consultar_gastos(){
			global $bd_taller;
			$query = "SELECT * FROM movimientos WHERE tipo = 'gasto' ORDER BY fecha DESC";
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		};
		function consultar_movimientos_recientes(){
			global $bd_taller;
			$query = "SELECT * FROM movimientos ORDER BY fecha DESC LIMIT 5";
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		};
		
		function consultar_dinero_disponible(){
			global $bd_taller;
			$query = "SELECT * FROM dinero ORDER BY fecha DESC LIMIT 1";
			$resultado = $bd_taller->select($query);
			//print_r($resultado);
			formatea_envia($resultado);
		};
		
	
	function formatea_envia($datos){
		header('Content-type: application/json');
		echo json_encode($datos);
	}

			
	

?>
