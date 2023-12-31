import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu!: [];

  cargarMenu(){
    const menuFromLocalStorage = localStorage.getItem('menu');
    if (menuFromLocalStorage !== null) {
      return this.menu = JSON.parse(menuFromLocalStorage) || [];
    }
  }

  // menu: any[] = [
  //   {
  //     titulo: 'Principal',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       {titulo: 'Main', url: '/'},
  //       {titulo: 'Progressbar', url: 'progress'},
  //       {titulo: 'Graficas', url: 'grafica1'},
  //       {titulo: 'Promesas', url: 'promesas'},
  //       {titulo: 'Rxjs', url: 'rxjs'},
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimientos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       {titulo: 'Usuarios', url: 'usuarios'},
  //       {titulo: 'Hospitales', url: 'hospitales'},
  //       {titulo: 'Medicos', url: 'medicos'},
  //     ]
  //   }
  // ]

  constructor() { }
}
