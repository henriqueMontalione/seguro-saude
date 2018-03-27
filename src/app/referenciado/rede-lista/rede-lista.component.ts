import { ReferenciadoLocalizacao } from './../../shared/referenciadoLocalizacao.model';
import { ReferenciadoEspecialidade } from '../../shared/referenciadoEspecialidade.model';
import { ReferenciadoService } from './../referenciado.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Referenciado } from '../../shared/referenciado.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

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

  constructor(private referenciadoService: ReferenciadoService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  ngOnInit() {
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

  pesquisar() {
    this.referenciadoService.getLocalizacao(this.planoID, this.cidade, this.especialidadeId).
      subscribe(referenciadoLocalizacao => {
        this.listaLocalizacao = referenciadoLocalizacao;
        console.log(this.listaLocalizacao);
        console.log('bairro: ' + this.listaLocalizacao[0].bairro);
      },
      error => {
        this.mensagemErro = 'O serviço de Localização está fora do ar.';
      });




    this.referenciadoService.getReferenciado(this.especialidadeId, this.bairro, this.planoID, this.cidade).
    subscribe(referenciado => {
      this.listaReferenciado = referenciado;
      console.log(this.listaReferenciado);
      console.log('Referenciado: ' + this.listaReferenciado[0]);
    },
    error => {
      this.mensagemErro = 'O serviço de Referenciado está fora do ar.';
    });
  }

  setStorage() {
    this.storage.set('planoId', '5');
    this.storage.set('cidade', 'rio de janeiro');

    this.cidade = this.storage.get('cidade');
    this.planoID = this.storage.get('planoId');
    console.log('planoId: ', this.storage.get('planoId'), ', cidade: ', this.storage.get('cidade'));
  }
}
