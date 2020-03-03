import { Component, OnInit } from "@angular/core";
import { ChartsDataService } from "../charts-data.service";

@Component({
  selector: "app-pagina-graficos",
  templateUrl: "./pagina-graficos.component.html",
  styleUrls: ["./pagina-graficos.component.css"]
})
export class PaginaGraficosComponent implements OnInit {
  constructor(private servicio: ChartsDataService) {}
  dataToPlot: Object;
  dataProcessed = [];
  isAreaChartReady = false;
  isPieChartReady = false;
  dataY = [];
  dataY2 = [];
  dataX = [];

  ngOnInit() {
    this.getDineroDataFiltrado();
    this.getIngresosData();
    this.getGastosData();
  }

  getIngresosData() {
    this.servicio.getIngresosPieData().subscribe(async data => {
      await this.setIngresosPieChartData(data);
    });
  }
  getGastosData() {
    this.servicio.getGastosPieData().subscribe(async data => {
      await this.setGastosPieChartData(data);
      this.isPieChartReady = true;
    });
  }

  getDineroDataFiltrado() {
    this.servicio.getHistorialDineroFiltrado().subscribe(async data => {
      await this.setAreaChartData(data);
      this.isAreaChartReady = true;
    });
  }

  /*************************AREA CHART *******************************/
  setAreaChartData(data) {
    for (const dia of data) {
      this.areaGraph.data[0].x.push(dia.fecha);
      this.areaGraph.data[0].y.push(dia.banco);
      this.areaGraph.data[1].y.push(dia.caja);
    }
    this.areaGraph.data[1].x = this.areaGraph.data[0].x;
  }

  public areaGraph = {
    data: [
      {
        x: [],
        y: [],
        type: "scatter",
        mode: "lines",
        marker: { color: "red" },
        name: "Dinero en banco",
        stackgroup: "one"
      },
      {
        x: this.dataX,
        y: this.dataY,
        type: "scatter",
        mode: "lines",
        marker: { color: "blue" },
        name: "Dinero en caja",
        stackgroup: "one"
      }
    ],
    layout: {
      responsive: true,
      title: "Progresión de la liquidez"
    }
  };

  /************************** INGRESOS PIE CHART *********************************/

  setIngresosPieChartData(data) {
    this.pieChart.data[0].values = Object.values(data);
    this.pieChart.data[0].labels = Object.keys(data);
  }

  public pieChart = {
    data: [
      {
        values: [],
        labels: [],
        type: "pie",
        name: "Ingresos"
      }
    ],
    layout: {
      responsive: true,
      title: "Composición de los Ingresos"
    }
  };

  /**************************GASTOS PIE CHART **********************************/
  setGastosPieChartData(data) {
    this.gastosPieChart.data[0].values = Object.values(data);
    this.gastosPieChart.data[0].labels = Object.keys(data);
  }

  public gastosPieChart = {
    data: [
      {
        values: [],
        labels: [],
        type: "pie",
        name: "Gastos"
      }
    ],
    layout: {
      responsive: true,
      title: "Composición de los gastos"
    }
  };
}
