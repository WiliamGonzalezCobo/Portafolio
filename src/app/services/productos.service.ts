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
    // Implementacion de promesa lo explica en seccion 7 clase 50
    return new Promise((resolve, reject) => {
      this.http.get("https://paginaportafolio-1a0bb.firebaseio.com/producto_idx.json")
        .subscribe(
          (resp: Producto[]) => {
            this.productos = resp;
            setTimeout(() => {
              this.cargando = false;
              resolve(); // Indicamos que termino Bien la promesa
            }, 2000);
          }
        );
    });
  }

  getProducto(id: string) {
    // esto lo explica en la  Seccion 7 clase 45
    return this.http.get(`https://paginaportafolio-1a0bb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.cargarProductoFiltrado(termino);
      });
    } else {
      this.cargarProductoFiltrado(termino)
    }
  }

  cargarProductoFiltrado(termino: string) {
    this.productosFiltrado = [];
    this.productos.forEach(element => {
      const categoriaLower = element.categoria.toLocaleLowerCase();
      const tituloLower = element.titulo.toLocaleLowerCase();
      const terminoLower = termino.toLocaleLowerCase();
      if (categoriaLower.includes(terminoLower) || tituloLower.includes(terminoLower)) {
        this.productosFiltrado.push(element);
      }
    }
    );

  }

}
