import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguradoService } from '../segurado.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SeguradoEventService } from '../segurado-event.service';

@Component({
  providers : [NavbarComponent],
  selector: 'app-segurado-view',
  templateUrl: './segurado-view.component.html'
})
export class SeguradoViewComponent implements OnInit {

  private nome: string;
  private cpf: string;
  private numeroApolice: string;
  private plano;

  constructor(private seguradoService : SeguradoService , 
    private router: Router, private route: ActivatedRoute ,
    public  navBar:  NavbarComponent,
    private seguradoEventService: SeguradoEventService) { 

    }
  ngOnInit() {

    //console.log('[Seguro Saude] - Carregando segurado de CPF:' + this.storage.get('cpf') + '.')
    
    //if (this.storage.get('cpf') != undefined &&
    //this.storage.get('cpf') != ''){

      this.seguradoService.getSegurado('11111111111' /*this.storage.get('cpf')*/)
      .subscribe(segurado => {
           this.nome = segurado.nome;
           this.cpf = segurado.cpf;
           this.numeroApolice = segurado.numeroApolice;
           this.plano = segurado.plano.nome;
           
           //this.storage.set('planoId', segurado.plano.id);
           //this.storage.set('cidade' , segurado.endereco.cidade); 
        }
      );

     //} else {
      //this.seguradoEventService.seguradoLogado.emit(false);
      //this.router.navigate(['']);
     //}

     
  }

  sair() {
    this.seguradoEventService.seguradoLogado.emit(false);    
    this.router.navigate(['']);
  }

}
