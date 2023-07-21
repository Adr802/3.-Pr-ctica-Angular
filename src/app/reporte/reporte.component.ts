import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../Gasto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit{
  gastos:Gasto[]=[];
  constructor(private gastoService:GastoService, private userService:UserService) {
    this.userService.obtenerDatos().subscribe(data2 =>
      {
        console.log(data2);
      })
  
    this.gastoService.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.gastos=data;
      })
  
  }
  ngOnInit(): void {
  }
}
