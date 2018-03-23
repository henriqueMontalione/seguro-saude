import { ReferenciadoLocalizacao } from './../../shared/referenciadoLocalizacao.model';
import { ReferenciadoEspecialidade } from '../../shared/referenciadoEspecialidade.model';
import { ReferenciadoService } from './../referenciado.service';
import { Component, OnInit } from '@angular/core';
import { Referenciado } from '../../shared/referenciado.model';

@Component({
  selector: 'app-rede-lista',
  templateUrl: './rede-lista.component.html'
})
export class RedeListaComponent implements OnInit {

  referenciadoEspecialidade: ReferenciadoEspecialidade;
  listaEspecialidade: Array<ReferenciadoEspecialidade>;

  referenciadoLocalizacao: ReferenciadoLocalizacao;
  listaLocalizacao: Array<ReferenciadoLocalizacao>;

  referenciado: Referenciado;
  listaReferenciado: Array<Referenciado>;

  localizacao: string;
  especialidadeId: string;

  constructor(private referenciadoService: ReferenciadoService) { }

  ngOnInit() {
    this.referenciadoService.getEspecialidade().
      subscribe(referenciadoEspecialidade => {
        this.listaEspecialidade = referenciadoEspecialidade;
        console.log(this.listaEspecialidade);
        console.log('ID: ' + this.listaEspecialidade[0].id);
        console.log('NOME: ' + this.listaEspecialidade[0].nome);
      });
      
      this.referenciadoService.getLocalizacao().
      subscribe(referenciadoLocalizacao => {
        this.listaLocalizacao = referenciadoLocalizacao;
        console.log(this.listaLocalizacao);
        console.log('bairro: ' + this.listaLocalizacao[0].bairro);
      });

      this.referenciadoService.getReferenciado(this.especialidadeId).
      subscribe(referenciado => {
        this.listaReferenciado = referenciado;
        console.log(this.listaReferenciado);
        console.log('Referenciado: ' + this.listaReferenciado[0]);
      });
  }

  

}
