import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
  cargada = false;

  constructor(private http: HttpClient) {
    // console.log('Entrando al constructor del servicio InfoPaginaService');
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        // console.log(resp['titulo']);
        // console.log(resp.titulo);
        this.info = resp;
        this.cargada = true;
        console.log(resp);
      });
   }

   // Leer el Archivo Json
   // Se debe Importar el Http app.module.ts
   // Lo explica en la Seccion 4 Clase 26


}
