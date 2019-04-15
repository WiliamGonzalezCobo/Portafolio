import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../interfaces/equipo.interface';



// no es necesario agregarlo en los providers del app.module gracias a este decorador
// lo explica en Seccion 4 Clase 26
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  // Para poder inicializar la interface con un objeto vacio se debe agregar el signo ? a cada propiedad
  // Para dejarlas como no obligatorias
  // Seccion 4 Clase 27
  info: InfoPagina = {};
  cargando = true;
  equipo: Equipo[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  // Leer el Archivo Json
  // Para hacer peticiones get, post etc
  // Se debe Importar el Http app.module.ts
  // Lo explica en la Seccion 4 Clase 26

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
        this.cargando = false;
      });
  }

  private cargarEquipo() {
    this.http.get('https://paginaportafolio-1a0bb.firebaseio.com/equipo.json')
      .subscribe((resp: Equipo[]) => {
        this.equipo = resp;
        this.cargando = false;
    });
  }
}
