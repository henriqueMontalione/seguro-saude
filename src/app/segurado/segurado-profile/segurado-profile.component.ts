import { Component, OnInit } from '@angular/core';
import { SeguradoService } from '../segurado.service';
import { Endereco } from '../../shared/endereco.model';

@Component({
  selector: 'app-segurado-profile',
  templateUrl: './segurado-profile.component.html'
})
export class SeguradoProfileComponent implements OnInit {

  endereco : Endereco
  cep: string
  logradouro:string
  bairro : string
  cidade: string
  uf : string

  constructor(private seguradoService : SeguradoService) { }

  ngOnInit() {
    
  }

  buscaCep(){
    console.log('Executando o metodo de localizacao de endereco pelo cep => ' + this.cep)
    this.seguradoService.enderecoByCep(this.cep).
            subscribe(endereco => {
              this.logradouro = endereco.logradouro;
              console.log(endereco.logradouro)
              this.bairro = endereco.bairro
              this.cidade = endereco.cidade
              this.uf = endereco.uf
            }
          )       
  }

}
