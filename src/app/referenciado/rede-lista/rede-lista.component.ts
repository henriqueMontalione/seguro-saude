import { ReferenciadoLocalizacao } from './../../shared/referenciadoLocalizacao.model';
import { ReferenciadoEspecialidade } from '../../shared/referenciadoEspecialidade.model';
import { ReferenciadoService, SIZE_PAGE_REFERENCIADO } from './../referenciado.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Referenciado } from '../../shared/referenciado.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router, ActivatedRoute } from '@angular/router';
import { SeguradoEventService } from '../../segurado/segurado-event.service';

@Component({
  selector: 'app-rede-lista',
  templateUrl: './rede-lista.component.html'
})
export class RedeListaComponent implements OnInit {

  private referenciadoEspecialidade: ReferenciadoEspecialidade;
  private listaEspecialidade: Array<ReferenciadoEspecialidade>;

  private referenciadoLocalizacao: ReferenciadoLocalizacao;
  private listaLocalizacao: Array<ReferenciadoLocalizacao>;

  private referenciado: Referenciado;
  private listaReferenciado: Array<Referenciado>;

  private localizacao: string;
  private especialidadeId = '0';
  private bairro = '';
  private planoID = '';
  private cidade = '';
  private mensagemErro: string;

  private initPage : number = 0;

  constructor(private referenciadoService: ReferenciadoService, 
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router, private route: ActivatedRoute,
    private seguradoEventService : SeguradoEventService) {}

   verifyLoogged(){

      if (!(this.storage.get('cpf') != undefined &&
      this.storage.get('cpf') != '')){
        this.seguradoEventService.seguradoLogado.emit(false);
        this.router.navigate(['']);
      } else {
        this.seguradoEventService.seguradoLogado.emit(true);
      }

   }
  
    ngOnInit() {

     //this.verifyLoogged();
     this.setStorage();

    this.referenciadoService.getEspecialidade().
      subscribe(referenciadoEspecialidade => {
        this.listaEspecialidade = referenciadoEspecialidade;
        console.log(this.listaEspecialidade);
        console.log('ID: ' + this.listaEspecialidade[0].id);
        console.log('NOME: ' + this.listaEspecialidade[0].nome);
      },
      error => {
        this.mensagemErro = 'O serviço de Especialidade está fora do ar.';
      });
      
      this.referenciadoService.getLocalizacao(this.planoID, this.cidade, this.especialidadeId).
      subscribe(referenciadoLocalizacao => {
        this.listaLocalizacao = referenciadoLocalizacao;
        console.log(this.listaLocalizacao);
        console.log('bairro: ' + this.listaLocalizacao[0].bairro);
      },
      error => {
        this.mensagemErro = 'O serviço de Localização está fora do ar.';
      });
  }

  pesquisar(newPagination : boolean) {

    if (newPagination){
      this.initPage = 0;
      this.listaReferenciado = new Array<Referenciado>();
    }

    if ( (this.especialidadeId == '' || this.especialidadeId == '0') 
        && this.bairro == ''){
          return;
    }

    this.referenciadoService.getReferenciado(this.especialidadeId, 
      this.bairro, this.planoID, this.cidade, this.initPage).
    subscribe(referenciado => {
      this.listaReferenciado.push(...referenciado);
  
      this.initPage += SIZE_PAGE_REFERENCIADO;
    },
    error => {
      this.mensagemErro = 'O serviço de Referenciado está fora do ar.';
    });

  }

  loadFilters(){
    
    this.referenciadoService.getLocalizacao(this.planoID, this.cidade, this.especialidadeId).
    subscribe(referenciadoLocalizacao => {
      this.listaLocalizacao = referenciadoLocalizacao;
      console.log(this.listaLocalizacao);
      console.log('bairro: ' + this.listaLocalizacao[0].bairro);
      this.bairro = '';
    },
    error => {
      this.mensagemErro = 'O serviço de Localização está fora do ar.';
    });

  }

  setStorage() {
    this.cidade = this.storage.get('cidade');
    this.planoID = this.storage.get('planoId');
  }
  
}
