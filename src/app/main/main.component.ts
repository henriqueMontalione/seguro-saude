import { Component, OnInit, Input } from '@angular/core';
import { SeguradoEndereco } from '../segurado/segurado-endereco.model';
import { SeguradoService } from '../segurado/segurado.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  seguradoEndereco : SeguradoEndereco
  cep: string
  logradouro:string

  constructor(private seguradoService : SeguradoService) { }

  ngOnInit() {
    //this.cep = '22750350'
  }

  buscaCep(){
    console.log('Executando o metodo de localizacao de endereco pelo cep => ' + this.cep)
    this.seguradoService.enderecoByCep(this.cep).
            subscribe(seguradoEndereco => {
              console.log('Segurado' + seguradoEndereco.cidade);
              this.logradouro = seguradoEndereco.logradouro;
            }
          )

  }


}
