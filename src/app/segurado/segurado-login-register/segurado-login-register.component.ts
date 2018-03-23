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

  mensagemErro : string;
  
  constructor(private seguradoService : SeguradoService) { }

  ngOnInit() {

    console.log('[Seguro Saude] - Executando o metodo de carga de plano.');

     //Carregando os planos 
     this.seguradoService.planos().
            subscribe(seguradoPlanos => {
              this.seguradoPlanos = seguradoPlanos;
            }, 
            error => {
              this.mensagemErro = 'Não foram localizados Planos ou o serviço esta fora do ar.';
            }
          )       


  }

  buscaCep(){
    console.log('[Seguro Saude] - Executando o metodo de localizacao de endereco pelo cep => ' + this.cep + ' .');
    
    this.seguradoService.enderecoByCep(this.cep).
            subscribe(endereco => {
              this.logradouro = endereco.logradouro;
              this.bairro = endereco.bairro;
              this.cidade = endereco.cidade;
              this.uf = endereco.uf;
              this.mensagemErro = '';
            }, 
            error => {
              this.mensagemErro = 'O CEP não foi localizado ou o serviço esta fora do ar.';
            }
          )       
  }

  criarSegurado(){

    console.log('[Seguro Saude] -  Criando usuario de nome : ' + this.nome + ' .');

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

    //var bodySeguradoJson = JSON.stringify(this.segurado);
    //console.log(bodySeguradoJson);

    this.seguradoService.criarSegurado(this.segurado)
    .subscribe(segurado => 
      console.log('[Segurod Saude] Segurado cadastrado nome : ' + segurado.nome + ' .'));

  }

}
