import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { SeguradoLoginRegisterComponent } from '../../segurado/segurado-login-register/segurado-login-register.component';
import { SeguradoEventService } from '../../segurado/segurado-event.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'segurado-profile', title: 'Editar Perfil',  icon:'person', class: '' },
    { path: 'rede-lista', title: 'Rede referenciada',  icon:'library_books', class: '' }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    menuItems: any[];
    public mostrarMenu: boolean = false;

  constructor(private seguradoEventService: SeguradoEventService,
     @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }  

  ngOnInit() {

    this.seguradoEventService.seguradoLogado.subscribe(
        mostrar => {
                this.mostrarMenu = mostrar
                }
        )   


    
        this.menuItems = ROUTES.filter(menuItem => menuItem);   
    

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
function newFunction() {
    return this;
}

