import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguradoService } from '../segurado.service';
import {Segurado} from '../segurado.model'
import { Endereco } from '../../shared/endereco.model';
import { SeguradoPlano } from '../../shared/segurado-plano.model';


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
  endereco : Endereco;
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
            subscribe(endereco => {
              this.logradouro = endereco.logradouro;
              console.log(endereco.logradouro)
              this.bairro = endereco.bairro
              this.cidade = endereco.cidade
              this.uf = endereco.uf
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

    this.endereco = new Endereco();
    this.endereco.cep = this.cep;
    this.endereco.bairro = this.bairro;
    this.endereco.cidade = this.cidade;
    this.endereco.logradouro = this.logradouro;
    this.endereco.numero = this.numero;
    this.endereco.uf = this.uf;


    this.segurado.endereco = this.endereco;


    var bodySeguradoJson = JSON.stringify(this.segurado);
    console.log(bodySeguradoJson);

    this.seguradoService.criarSegurado(this.segurado)
    .subscribe(segurado => console.log(segurado.nome))

  }

}
