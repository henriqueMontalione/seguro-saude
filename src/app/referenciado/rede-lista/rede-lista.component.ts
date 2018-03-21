import { ReferenciadoEspecialidade } from './../referenciadoEspecialidade.model';
import { ReferenciadoService } from './../referenciado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rede-lista',
  templateUrl: './rede-lista.component.html'
})
export class RedeListaComponent implements OnInit {

  referenciadoEspecialidade: ReferenciadoEspecialidade;
  listaEspecialidade: Array<ReferenciadoEspecialidade>;


  constructor(private referenciadoService: ReferenciadoService) { }

  ngOnInit() {
    this.referenciadoService.getEspecialidade().
      subscribe(referenciadoEspecialidade => {

        // this.id = referenciadoEspecialidade.id;
        // this.nome = referenciadoEspecialidade.nome;

        // console.log(referenciadoEspecialidade);

        this.listaEspecialidade = referenciadoEspecialidade;
        console.log(this.listaEspecialidade);
        console.log('ID: ' + this.listaEspecialidade[0].id);
        console.log('NOME: ' + this.listaEspecialidade[0].nome);
      });
  }

}
