import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguradoService } from '../segurado.service';

@Component({
  selector: 'app-segurado-view',
  templateUrl: './segurado-view.component.html'
})
export class SeguradoViewComponent implements OnInit {

  private nome : string;
  private cpf : string;
  private numeroApolice : string;
  private plano;

  constructor(private seguradoService : SeguradoService , 
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {

    console.log('[Seguro Saude] - Carregando segurado de CPF:' + this.storage.get('cpf') + '.')
    if (this.storage.get('cpf') != undefined &&
    this.storage.get('cpf') != ''){

      this.seguradoService.getSegurado( this.storage.get('cpf'))
      .subscribe(segurado => {
           this.nome = segurado.nome;
           this.cpf = segurado.cpf;
           this.numeroApolice = segurado.numeroApolice;

           this.seguradoService.getPlano(segurado.planoId).
           subscribe(plano => this.plano = plano.nome);
        }
      );

     

     } else {
      this.router.navigate(['']);

     }
   
  

  }

}
