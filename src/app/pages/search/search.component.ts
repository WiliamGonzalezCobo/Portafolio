import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(parametros => {
        this.productosService.buscarProducto(parametros['termino']);
      });
  }

}
