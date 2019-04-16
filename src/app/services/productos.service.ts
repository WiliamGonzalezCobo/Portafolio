import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get("https://paginaportafolio-1a0bb.firebaseio.com/producto_idx.json")
      .subscribe(
        (resp: Producto[]) => {
          this.productos = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 2000);
        }
      );
  }

  getProducto(id: string) {
    // esto lo explica en la  Seccion 7 clase 45
    return this.http.get(`https://paginaportafolio-1a0bb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(terminio: string) {
    this.productosFiltrado = this.productos.filter(
      producto => { return true });
  }

}
