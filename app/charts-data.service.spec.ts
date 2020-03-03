import { TestBed, ComponentFixture, inject, async, fakeAsync, tick, flushMicrotasks, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ChartsDataService } from './charts-data.service';
import * as myGlobals from './globals'

fdescribe('ChartsDataService', () => {
  let service: ChartsDataService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChartsDataService]
    });
    service = TestBed.get(ChartsDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(
    'should be initialized',
    inject([ChartsDataService], (chartsService: ChartsDataService) => {
      expect(chartsService).toBeTruthy();
    })
  );

  it(
    'should get the ingresos data',
    fakeAsync(
      () => {

        // Set up
        const responseObject = {
          status: 200,
          body: {
            "encolar": 226.55,
            "cojines": 822.12,
            "sillas": 200,
            "sillones": 3300,
            "sof\u00e1s": 27400,
            "espuma": 800,
            "telas": 0,
            "rejilla": 0
          }
        };
        let response = null;
        // End Setup

        service.getIngresosPieData().subscribe(
          (receivedResponse: any) => {
            response = receivedResponse;
            // expect(receivedResponse).toBe(responseObject);
          },
          (error: any) => { console.log(error) }
        );

        const requestWrapper = httpMock.expectOne(myGlobals.url_get + '?tabla=ingresos_stats', 'call to api in get endpoint');
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject.body);
        expect(response.status).toBe(200);

        httpMock.verify();
      }

    )
  );

  it(
    'should get the ingresos data',
    fakeAsync(
      () => {

        // Set up
        const responseObject = {
          status: 200,
          body: {
            "encolar": 226.55,
            "cojines": 822.12,
            "sillas": 200,
            "sillones": 3300,
            "sof\u00e1s": 27400,
            "espuma": 800,
            "telas": 0,
            "rejilla": 0
          }
        };
        let response = null;
        // End Setup

        service.getIngresosPieData().subscribe(
          (receivedResponse: any) => {
            response = receivedResponse;
            // expect(receivedResponse).toBe(responseObject);
          },
          (error: any) => { console.log(error) }
        );

        const requestWrapper = httpMock.expectOne(myGlobals.url_get + '?tabla=ingresos_stats', 'call to api in get endpoint');
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject.body);
        expect(response.status).toBe(200);

        httpMock.verify();
      }

    )
  );

  it(
    'should get the ingresos data',
    fakeAsync(
      () => {

        // Set up
        const responseObject = {
          status: 200,
          body: {
            "encolar": 100,
            "cojines": 200,
            "sillas": 300,
            "sillones": 400,
            "sof\u00e1s": 500,
            "espuma": 600,
            "telas": 700,
            "rejilla": 800
          }
        };
        let response = null;
        // End Setup

        service.getIngresosPieData().subscribe(
          (receivedResponse: any) => {
            response = receivedResponse;
          },
          (error: any) => { console.log(error) }
        );

        const requestWrapper = httpMock.expectOne(myGlobals.url_get + '?' + myGlobals.query + '=' + myGlobals.ingresos_stats, 'call to api in get endpoint');
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject.body);
        expect(response.status).toBe(200);

        httpMock.verify();
      }

    )
  );

  it(
    'should get the gastos data',
    fakeAsync(
      () => {

        // Set up
        const responseObject = {
          status: 200,
          body: {
            "comida": 50,
            "combustible": 100,
            "alquiler": 150,
            "servicios": 200,
            "impuestos": 250,
            "seguridad social": 300,
            "salarios": 350,
            "materiales": 400
          }
        };
        let response = null;
        // End Setup

        service.getGastosPieData().subscribe(
          (receivedResponse: any) => {
            response = receivedResponse;
          },
          (error: any) => { console.log(error) }
        );

        const requestWrapper = httpMock.expectOne(myGlobals.url_get + '?' + myGlobals.query + '=' + myGlobals.gastos_stats, 'call to api in get endpoint');
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject.body);
        expect(response.status).toBe(200);

        httpMock.verify();
      }

    )
  );

  it(
    'should get the historical cash flow data filtered by day',
    fakeAsync(
      () => {

        // Set up
        const responseObject = {
          status: 200,
          body: [
            {
              "fecha": "2019-04-26 07:56:11",
              "caja": "50.00",
              "banco": "0.00"
            }, {
              "fecha": "2019-04-27 14:09:52",
              "caja": "-3359.16",
              "banco": "-2038.45"
            }, {
              "fecha": "2019-04-28 14:53:50",
              "caja": "-16359.16",
              "banco": "-3638.45"
            }, {
              "fecha": "2019-04-29 04:08:17",
              "caja": "-16359.16",
              "banco": "-2538.45"
            }, {
              "fecha": "2019-05-10 10:59:39",
              "caja": "-16255.61",
              "banco": "-2338.45"
            },]
        };
        let response = null;
        // End Setup

        service.getHistorialDineroFiltrado().subscribe(
          (receivedResponse: any) => {
            response = receivedResponse;
          },
          (error: any) => { console.log(error) }
        );

        const requestWrapper = httpMock.expectOne(myGlobals.url_get + '?' + myGlobals.query + '=' + myGlobals.liquides_hist, 'call to api in get endpoint');
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject.body);
        expect(response.status).toBe(200);

        httpMock.verify();
      }

    )
  );

});
