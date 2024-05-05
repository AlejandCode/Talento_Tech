import { Component } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'] // Verifica esta ruta
})

export class NameListComponent {
  nombres: string[] = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro'];
}
