import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PATH } from './core/enum/path.enum';
import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';

export const routes: Routes = [
  {
    // path: 'inicio',
    path: PATH.HOME,
    title: 'Home',
    children: [
      //path por defecto del path padre
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        // path: 'persona',
        path: PATH.PERSONA,
        title: 'Personas',
        component: PersonaComponent,
      },
      {
        // path: 'usuario',
        path: PATH.USUARIO,
        title: 'Personas',
        component: UsuariosComponent,
      },
      {
        // path: 'imagenes',
        path: PATH.IMAGEN,
        title: 'imagen',
        component: ImagenesComponent,
      },
      {
        // path: 'contacto',
        path: PATH.CONTACTO,
        title: 'Contactos',
        component: ContactoComponent,
      },
      {
        // path: 'acerca-de',
        path: PATH.ACERCADE,
        title: 'AcercaDe',
        component: AcercaDeComponent,
      },
    ],
  },
];
