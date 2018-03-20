import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }


  ngOnInit() {
  }

  criarSegurado(){
    console.log(this.cpf);
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
    console.log(this.confirmacaoSenha);

  }

}
