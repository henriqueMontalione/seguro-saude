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

  /* Atributos dos formularios */
  cpf:string;
  nome:string;
  dataNascimento:string;
  email:string;
  sexo:string;
  cep:string;
  numero:string;
  bairro:string;
  cidade:string;
  uf:string;
  complemento:string;
  logradouro:string;
  senha:string;
  confirmacaoSenha:string;
  planoId: string;
  telefone : string;

  segurado : Segurado;
  seguradoEndereco : SeguradoEndereco;
  seguradoPlanos: Array<SeguradoPlano>;
  
  constructor(private seguradoService : SeguradoService) { }

  ngOnInit() {
     //Carregando os planos 
     this.seguradoService.planos().
            subscribe(seguradoPlanos => {
              this.seguradoPlanos = seguradoPlanos;
            }
          )       


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

  criarSegurado(){

    this.segurado = new Segurado();
    this.segurado.nome = this.nome;
    this.segurado.cpf = this.cpf;
    this.segurado.dataNascimento = this.dataNascimento;
    this.segurado.email = this.email;
    this.segurado.planoId = this.planoId;
    this.segurado.senha = this.senha;
    this.segurado.telefone = this.telefone;

    this.seguradoEndereco = new SeguradoEndereco();
    this.seguradoEndereco.cep = this.cep;
    this.seguradoEndereco.bairro = this.bairro;
    this.seguradoEndereco.cidade = this.cidade;
    this.seguradoEndereco.logradouro = this.logradouro;
    this.seguradoEndereco.numero = this.numero;
    this.seguradoEndereco.uf = this.uf;

    this.segurado.endereco = this.seguradoEndereco;


    var bodySeguradoJson = JSON.stringify(this.segurado);
    console.log(bodySeguradoJson);

    this.seguradoService.criarSegurado(this.segurado)
    .subscribe(segurado => console.log(segurado.nome))

  }

}
