import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from './Gasto';

const configurl="assets/datos.json";

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio http esta funcionando...');
   }
   obtenerDatos(){
    return this.httpclient.get<Gasto[]>(configurl);
   }
} 

