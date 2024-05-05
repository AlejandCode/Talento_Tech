import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { HeaderComponent } from "./shared/header/header.component";
// import { NameListComponent } from "./name-list/name-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, InicioComponent, HeaderComponent]
})
export class AppComponent {
  title = 'proyecto-clase';

  nombre: string = 'Martin rios';
  edad: number = 40;
}
