import { ProductoInterfase } from './../core/interface/producto.interface';
import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../components/tabla/tabla.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent implements OnInit {
  misPrioductos: ProductoInterfase[] = [];
  titulo: string = 'Lista de Producto';
  columnas: string[] = [];

  ngOnInit(): void {
    this.misPrioductos = [
      {
        nombre: 'Pantalon',
        sku: 'P8795',
        cantidad: 15,
        precio: 45000,
      },
      {
        nombre: 'Chaqueta',
        sku: 'Ch4795',
        cantidad: 51,
        precio: 10000,
      },
      {
        nombre: 'Camisas',
        sku: 'Ca744',
        cantidad: 41,
        precio: 39900,
      },
    ];
    this.obtenerColumnas(this.misPrioductos);
  }
  obtenerColumnas(productos: ProductoInterfase[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }
}
