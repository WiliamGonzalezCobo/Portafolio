import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { DetalleProducto } from 'src/app/interfaces/detalleProducto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id:string;
  producto : DetalleProducto;

  constructor(private route: ActivatedRoute, public productoService : ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros =>{
      this.productoService.getProducto(parametros["id"])
      .subscribe(
        (product:DetalleProducto) => {
          this.producto = product;
          this.id = parametros["id"];
        }
      );
    })
  }

}
