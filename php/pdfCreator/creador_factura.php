<?php
require ("pdf_mc_table.php");
define('EURO',chr(128));
setlocale(LC_MONETARY,"es_ES");
	
class Factura extends PDF_MC_Table
{
	var $suma = "";
	var $sumaTotal = "";
	var $iva = "";
	
	function SetValoresFinales($suma,$sumaT,$iva){
		$this->suma .= $suma;
		$this->sumaTotal .= $sumaT;
		$this->iva .= $iva;
		
	}
	
	function Header()
	{
		// Logo
		$this->Image(getcwd().'/pdfCreator/about.jpg',8,7,50,50);
		
	}
	function Footer()
	{
		// Position at 1.5 cm from bottom
		$this->SetY(-15);
		// Arial italic 8
		$this->SetFont('Arial','I',9);
		// Page number
		$this->Cell(0,10,utf8_decode('Puede contactar con nosotros a través de el correo info@tapibautista.com o en la página tapibautista.com/contact'),0,0,'C');
		
	}
	
	function addTablaVendedor($datos){
		
		$vertOffset = 7;
		$cellWidthArray = array(110);
		$horOffset = 80;
		
		$this->SetWidths($cellWidthArray);
		$this->SetLineHeight($vertOffset);
		
		// Arial bold 13
		$this->SetFont('Arial','B',13);
		
		foreach($datos as $data){
			$this->Cell($horOffset);
			$this->SingleColumn($data);
		}
	}
	
	function addTablaComprador($datos){
		
		$vertOffset = 7;
		$cellWidthArray = array(110);
		$cellWidth = 120;
		$horOffset = 1;
		
		$this->SetWidths($cellWidthArray);
		$this->SetLineHeight($vertOffset);
		
		// Arial bold 13
		$this->SetFont('Arial','B',13);

		foreach($datos as $data){
			$this->SingleColumn($data);
		}
		
		
		
	}
	
	function addTablaCompra($columnasTablaCompra,$datos){
		
		// Column widths
		$cellWidth = array(30, 80, 40, 40);
		
		$vertOffset = 7;
		$horOffset = 5;
		$this->SetWidths($cellWidth);
		$this->SetLineHeight($vertOffset);
		
		// Arial bold 13
		$this->SetFont('Arial','B',13);
		
		$this->HeadRow($columnasTablaCompra);
		
		$this->SetFont('Arial','',12);
		
		foreach($datos as $data){
			//print_r($data);
			$this->Row($data);
			}
		
		$this->SetFont('Arial','B',13);
		$offset = $cellWidth[0]+$cellWidth[1];
		$this->Cell($offset,0,'','T');
		$this->Cell($cellWidth[2],$vertOffset,"SUMA",1,0,'L');
		$this->Cell($cellWidth[2],$vertOffset,$this->suma,1,0,'L');  ///AQUI HAY QUE PONER EL VALOR DE LA SUMA DE TOTALES
		$this->Ln();
		
		$this->Cell($offset);
		$this->Cell($cellWidth[2],$vertOffset,"IVA",1,0,'L'); 
		$this->Cell($cellWidth[2],$vertOffset,$this->iva,1,0,'L'); //AQUI HAY QUE PONER EL IVA
		$this->Ln();
		
		$this->Cell($offset);
		$this->Cell($cellWidth[2],$vertOffset,"SUMATOTAL",1,0,'L'); 
		$this->Cell($cellWidth[2],$vertOffset,$this->sumaTotal,1,0,'L'); //AQUI HAY QUE PONER EL VALOR DE LA SUMA MAS EL IVA
		$this->Ln();
		
	}
}
	
				
	function setDatosFactura($datosFactura){
		//print_r($datosFactura);
		$datosVendedor = [
			"Factura número : ",
			"Fecha : ",
			"Nombre: Nombre inventado",
			"Domicilio: Calle inventada",
			"C.P/Provincia: 28000/Inventada",
			"DNI: 00000000A",
			"Teléfono: 789456532"
			];
			
		$datosComprador = [
					"Cliente: ",
					"NIF: ",
					"Domicilio: ",
					"C.P/Provincia: "
					];

		$columnasTablaCompra = [
					"CANTIDAD",
					"CONCEPTO",
					"PRECIO",
					"TOTAL"
					];
		$datosCompra;
		
		$suma="";
		$sumaTotal="";
		$iva="";
		$nombreFactura="";
		
		if(!empty($datosFactura["nombre"])) $datosComprador[0] .= $datosFactura["nombre"];
		if(!empty($datosFactura["nif"])) $datosComprador[1] .= $datosFactura["nif"];
		if(!empty($datosFactura["direccion"])) $datosComprador[2] .= $datosFactura["direccion"];
		if(!empty($datosFactura["cpProvincia"])) $datosComprador[3] .= $datosFactura["cpProvincia"];
		
		$datosCompra = array();
		foreach($datosFactura['productos'] as $producto){
			$tmp =array();
			foreach($producto as $value){
				array_push($tmp,$value);
			}
			array_push($datosCompra,$tmp);
		}
		//print_r($datosCompra);
		
		if(!empty($datosFactura["numero"])) {
			$datosVendedor[0] .= $datosFactura["numero"]."/".date('Y');
			$nombreFactura .= $datosFactura["numero"]."_".date('Y').".pdf";
		}
		if(!empty($datosFactura["fecha"])) {
			$str = substr($datosFactura["fecha"],0,10);
			$fecha = date('d-m-Y',strtotime($str));
			$datosVendedor[1] .= $fecha;
		}
		
		if(!empty($datosFactura["sum"])) $suma .= money_format("%.2n", $datosFactura["sum"]).' '.EURO;
		if(!empty($datosFactura["iva"])) $iva .= money_format("%.2n", $datosFactura["iva"]).' '.EURO;
		if(!empty($datosFactura["sumTotal"])) $sumaTotal .= money_format("%.2n", $datosFactura["sumTotal"]).' '.EURO;

		
		$pdf = new Factura("p","mm","A4","UTF-8");
		$pdf->addPage();
		
		
		
		$pdf->addTablaVendedor($datosVendedor);
		
		$pdf->Ln(15);
		
		$pdf->addTablaComprador($datosComprador);
		
		$pdf->Ln(30);
		

		$pdf->SetValoresFinales($suma,$sumaTotal,$iva);
		$pdf->addTablaCompra($columnasTablaCompra, $datosCompra);

		$pdf->Output('F',getcwd().'/pdfCreator/facturas/Factura_'.$nombreFactura,true);
		chmod(getcwd().'/pdfCreator/facturas/Factura_'.$nombreFactura, 0755);
		
		echo json_encode("./php/pdfCreator/facturas/Factura_".$nombreFactura);
	}

?>
