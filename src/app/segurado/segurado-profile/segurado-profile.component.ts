import { Component, OnInit } from '@angular/core';
import { SeguradoEndereco } from '../segurado-endereco.model';
import { SeguradoService } from '../segurado.service';

@Component({
  selector: 'app-segurado-profile',
  templateUrl: './segurado-profile.component.html'
})
export class SeguradoProfileComponent implements OnInit {

  seguradoEndereco : SeguradoEndereco
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
            subscribe(seguradoEndereco => {
              this.logradouro = seguradoEndereco.logradouro;
              console.log(seguradoEndereco.logradouro)
              this.bairro = seguradoEndereco.bairro
              this.cidade = seguradoEndereco.cidade
              this.uf = seguradoEndereco.uf
            }
          )       
  }

}
