import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguradoService } from '../segurado.service';
import { SeguradoPlano } from '../segurado-plano.model';
import {Segurado} from '../segurado.model'
import { SeguradoEndereco } from '../segurado-endereco.model';


@Component({
  selector: 'app-segurado-login-register',
  templateUrl: './segurado-login-register.component.html'
})
export class SeguradoLoginRegisterComponent implements OnInit {

  cpf:string
  nome:string
  dataNascimento:String
  email:string
  sexo:string
  cep:string
  numero:string
  bairro:string
  cidade:string
  uf:string
  complemento:string
  logradouro:string
  senha:string
  confirmacaoSenha:string

  seguradoPlano: Array<SeguradoPlano>;
  segurado : Segurado;
  seguradoEndereco : SeguradoEndereco;
  

  constructor(private seguradoService : SeguradoService) { }


  ngOnInit() {

    this.segurado = new Segurado();
    this.segurado.nome = 'Aiello';
    this.segurado.cpf = '000000000';

    this.seguradoEndereco = new SeguradoEndereco();
    this.seguradoEndereco.cep = '999999';

    this.segurado.endereco = this.seguradoEndereco;

    var json = JSON.stringify(this.segurado);
    console.log(json);
     this.seguradoService.planos().
            subscribe(seguradoPlano => {
              this.seguradoPlano = seguradoPlano;

              console.log('Plano ' + this.seguradoPlano[0].nome);
              console.log('Plano ' + this.seguradoPlano[0].id);
              
            }
          )       


  }

  criarSegurado(){

   


   /* console.log(this.cpf);
    console.log(this.nome);
    console.log(this.dataNascimento);
    console.log(this.email);
    console.log(this.sexo);
    console.log(this.logradouro);
    console.log(this.cep);
    console.log(this.numero);
    console.log(this.bairro);
    console.log(this.cidade);
    console.log(this.uf);
    console.log(this.complemento);
    console.log(this.senha);
    console.log(this.confirmacaoSenha);*/

   


  }

}
