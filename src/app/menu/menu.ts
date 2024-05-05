import { PATH } from './../core/enum/path.enum';
import { Interface } from 'readline';
import internal from 'stream';
import { MenuInfoInterface } from '../core/interface/menu.info.interface';

export const menuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.PERSONA,
    title: 'Personas',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.USUARIO,
    title: 'Ver Usuarios',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagenes',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contactos',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'AcercaDe',
    icon: '',
    classCss: '',
    submenu: [],
  },
];
