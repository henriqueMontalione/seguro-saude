import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguradoService } from '../segurado.service';
import { Endereco } from '../../shared/endereco.model';
import { SeguradoPlano } from '../../shared/segurado-plano.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Segurado } from '../../shared/segurado.model';
import { SeguradoEventService } from '../segurado-event.service';


@Component({
  selector: 'app-segurado-login-register',
  templateUrl: './segurado-login-register.component.html'
})
export class SeguradoLoginRegisterComponent implements OnInit {

  /* Atributos dos formularios */
  private cpf:string;
  private nome:string;
  private dataNascimento:string;
  private email:string;
  private sexo:string;
  private cep:string;
  private numero:string;
  private bairro:string;
  private cidade:string;
  private uf:string;
  private complemento:string;
  private logradouro:string;
  private senha:string;
  private confirmacaoSenha:string;
  private planoId: string;
  private telefone : string;

  private segurado : Segurado;
  private endereco : Endereco;
  private seguradoPlano : SeguradoPlano;
  private seguradoPlanos: Array<SeguradoPlano>;

  private loginCPF : string;

  private mensagemErro : string;


  constructor(private seguradoService : SeguradoService , 
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router, private route: ActivatedRoute,
    private seguradoEventService: SeguradoEventService) { }

  ngOnInit() {

    console.log('[Seguro Saude] - Executando o metodo de carga de plano.');

    this.storage.remove('cpf');
    this.seguradoEventService.seguradoLogado.emit(false);

    this.seguradoService.getPlanos().
            subscribe(seguradoPlanos => {
              this.seguradoPlanos = seguradoPlanos;
            }, 
            error => {
              this.mensagemErro = 'Não foram localizados Planos ou o serviço esta fora do ar.';
            }
          )       
  }

  buscarCepParaCadastro(){

    if (this.cep == null ) return;

    console.log('[Seguro Saude] - Executando o metodo de localizacao de endereco pelo cep => ' + this.cep + ' .');
    
    this.seguradoService.getEnderecoByCep(this.cep).
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

    this.seguradoPlano = new SeguradoPlano();
    this.seguradoPlano.id = this.planoId;
    this.segurado.plano = this.seguradoPlano;

    this.segurado.senha = this.senha;
    this.segurado.telefone = this.telefone;

    this.segurado.sexo = this.sexo;
    this.endereco = new Endereco();
    this.endereco.cep = this.cep;
    this.endereco.bairro = this.bairro;
    this.endereco.cidade = this.cidade;
    this.endereco.logradouro = this.logradouro;
    this.endereco.numero = this.numero;
    this.endereco.uf = this.uf;
    this.endereco.complemento = this.complemento;

    this.segurado.endereco = this.endereco;

   // var bodySeguradoJson = JSON.stringify(this.segurado);
    //console.log(bodySeguradoJson);

    this.seguradoService.saveSegurado(this.segurado)
    .subscribe(segurado => {
              console.log('[Segurado Saude] - Segurado cadastrado CPF : ' + segurado.cpf + ' .')
              this.storage.set('cpf', segurado.cpf);
              this.seguradoEventService.seguradoLogado.emit(true);
              this.router.navigate(['segurado-view']);
           } , 
           error => {
             this.mensagemErro = 'Não foi possível efetuar a compra do seu Plano, por favor tente mais tarde.';
           }
      );
  }

  logarSegurado(){

      console.log('[Segurado Saude] - Localizando Segurado com CPF : ' + this.loginCPF + ' .')

      this.seguradoService.getSegurado(this.loginCPF)
      .subscribe(segurado => {
          this.storage.set('cpf', segurado.cpf);
          this.seguradoEventService.seguradoLogado.emit(true);
          this.router.navigate(['segurado-view']);
        }, 
          error => {
          this.mensagemErro = 'Segurado não localizado, compre seu Plano agora !';
          this.seguradoEventService.seguradoLogado.emit(false);
        }
      );
  }


}
