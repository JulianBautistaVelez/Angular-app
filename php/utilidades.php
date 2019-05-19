<?php
	error_reporting(E_ALL);
	ini_set('display_errors',1);
	
	require_once('bd_taller.php');
	require_once('consultar.php');
	require_once('introducir.php');
	require_once('./pdfCreator/creador_factura.php');
	
	global $bd_taller;
	
	if(!class_exists("clase_utilidades")){
		class clase_utilidades{
			
			function crea_factura($datos){
				//$object = (object) ['sumaProducto'=>0];
				$calcFactura = ['sum' => 0, 'iva'=>0 ,'sumTotal'=>0];
				/*foreach($datos['productos'] as $producto){
					$producto['suma'] = $producto['cantidad'] * $producto['valor'];
					$calcFactura['sum'] += $producto['suma'];
				}*/
				$nProductos = count($datos['productos']);
				for($i=0;$i<$nProductos;$i++){
					$datos['productos'][$i]['valor'] *=1.0;
					$datos['productos'][$i]['suma'] = $datos['productos'][$i]['cantidad'] * $datos['productos'][$i]['valor'];
					$calcFactura['sum'] += $datos['productos'][$i]['suma'];
				}
				$calcFactura['iva'] = round($calcFactura['sum'] * 0.21,2);
				$calcFactura['sumTotal'] = $calcFactura['sum'] + $calcFactura['iva'];
				$datosFinalesFactura = array_merge($datos,$calcFactura);
				
				//print_r($datosFinalesFactura);
				setDatosFactura($datosFinalesFactura);
				//imprimeFactura();
			}
		

				
			
			
			function getDataGastos(){
				global $bd_taller;
				
				$query = "SELECT * FROM movimientos WHERE tipo LIKE 'gasto' ";
				
				$resultado = $bd_taller->select($query);
				
				/*NECESITO LA FORMA DE UTILIZAR EL RESULTADO DE LA QUERY SIN NECESIDAD DE CODIFICARLO EN JSON Y LUEGO DECODIFICARLO*/
				$movimientos = json_encode($resultado);
				$prueba = json_decode($movimientos);
				
				$gasto_en_concepto=[
					"comida" => 0,
					"combustible" => 0,
					"alquiler" => 0,
					"servicios" => 0,
					"impuestos" => 0,
					"seguridad social" => 0,
					"salarios" => 0,
					"materiales" => 0,
					//"otros" => 0
				];
				
				
				foreach($prueba as $movimiento){
						if(strpos($movimiento->concepto,"Comida") !== false) $gasto_en_concepto["comida"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Combustible") !== false) $gasto_en_concepto["combustible"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Alquiler") !== false) $gasto_en_concepto["alquiler"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Servicios") !== false) $gasto_en_concepto["servicios"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Impuestos") !== false) $gasto_en_concepto["impuestos"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Seguridad social") !== false) $gasto_en_concepto["seguridad social"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Salario") !== false) $gasto_en_concepto["salarios"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Materiales") !== false) $gasto_en_concepto["materiales"] += $movimiento->valor;
						//else $gasto_en_concepto["otros"] += $movimiento->valor;	
				}
				
				
				return $gasto_en_concepto;
			}
			
			function getDataIngresos(){
				global $bd_taller;
				
				$query = "SELECT * FROM movimientos WHERE tipo LIKE 'ingreso'";
				
				$resultado = $bd_taller->select($query);
				
				/*NECESITO LA FORMA DE UTILIZAR EL RESULTADO DE LA QUERY SIN NECESIDAD DE CODIFICARLO EN JSON Y LUEGO DECODIFICARLO*/
				$movimientos = json_encode($resultado);
				$prueba = json_decode($movimientos);
				
				$ingreso_en_concepto=[
					"encolar" => 0,
					"cojines" => 0,
					"sillas" => 0,
					"sillones" => 0,
					"sofás" => 0,
					"espuma" => 0,
					"telas" => 0,
					"rejilla" => 0,
					//"otros" => 0
				];
				
				foreach($prueba as $movimiento){
						if(strpos($movimiento->concepto,"Encolar") !== false) $ingreso_en_concepto["encolar"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Cojines") !== false) $ingreso_en_concepto["cojines"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Sillas") !== false) $ingreso_en_concepto["sillas"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Sillones") !== false) $ingreso_en_concepto["sillones"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Sofás") !== false) $ingreso_en_concepto["sofás"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Espuma") !== false) $ingreso_en_concepto["espuma"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Telas") !== false) $ingreso_en_concepto["telas"] += $movimiento->valor;
						elseif(strpos($movimiento->concepto,"Rejilla") !== false) $ingreso_en_concepto["rejilla"] += $movimiento->valor;
						//else $ingreso_en_concepto["otros"] += $movimiento->valor;
				}
				
				
				
				return $ingreso_en_concepto;
			}
			
			
			function actualizaBancoCaja($tipo_mov, $dinero, $destino){
				global $bd_taller;
				
				$query="SELECT * FROM dinero ORDER BY fecha DESC LIMIT 1";
				$valores = $bd_taller->select($query);
				if($tipo_mov == "gasto") $dinero*=-1;
				if($destino == "Banco") {
					$nuevo_valor_banco = $valores[0]->banco + $dinero;
					$nuevo_valor_caja = $valores[0]->caja;
				}
				
				if($destino == "Caja") {
					$nuevo_valor_banco = $valores[0]->banco;
					$nuevo_valor_caja = $valores[0]->caja + $dinero;
				}
				
				$query ="INSERT INTO dinero (banco, caja) VALUES ('".$nuevo_valor_banco."','".$nuevo_valor_caja."')";
				print_r($query);
				$resultado = $bd_taller->insert($query);
				
				
				return $resultado;
					
			}
			
		}
	}
	
	$utilidades= new clase_utilidades();
	
?>
