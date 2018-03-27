import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


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
  novoPlano : boolean = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {

    if (this.storage.get('cpf') != null){
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.novoPlano = false;
    }else {
       this.novoPlano = true;
    }  

    console.log('Novo Plano ' + this.novoPlano + ' CPF ' + this.storage.get('cpf'));
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
