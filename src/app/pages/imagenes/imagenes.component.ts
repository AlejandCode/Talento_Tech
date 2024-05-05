import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss',
})
export class ImagenesComponent {}
