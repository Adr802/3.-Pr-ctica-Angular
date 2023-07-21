import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { GastoService } from './gasto.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReporteComponent } from './reporte/reporte.component';


const rutas: Routes= [
  { path: 'informacion', component: InformacionComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reporte', component: ReporteComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

