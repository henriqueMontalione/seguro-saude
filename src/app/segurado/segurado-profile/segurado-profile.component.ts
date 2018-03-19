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
    //this.cep = '22750350'
  }

  buscaCep(){
    console.log('Executando o metodo de localizacao de endereco pelo cep => ' + this.cep)
 /*   this.seguradoService.enderecoByCep(this.cep).
            subscribe(seguradoEndereco => {
              console.log('Segurado' + seguradoEndereco.cidade);
              this.logradouro = seguradoEndereco.logradouro;
            }
          ) */

        this.logradouro = 'Rua Araguaia' //seguradoEndereco.logradouro
        this.bairro = 'Freguesia' //seguradoEndereco.bairro
        this.cidade = "Rio de Janeiro" //seguradoEndereco.cidade
        this.uf = "RJ" //seguradoEndereco.uf

  }

}
