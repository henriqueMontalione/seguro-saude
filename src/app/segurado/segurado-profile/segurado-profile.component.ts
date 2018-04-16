import { Component, OnInit, Inject } from '@angular/core';
import { SeguradoService } from '../segurado.service';
import { Endereco } from '../../shared/endereco.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Segurado } from '../../shared/segurado.model';
import { SeguradoPlano } from '../../shared/segurado-plano.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguradoEventService } from '../segurado-event.service';

@Component({
  selector: 'app-segurado-profile',
  templateUrl: './segurado-profile.component.html'
})
export class SeguradoProfileComponent implements OnInit {

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
  private numeroApolice : string;

  private seguradoPlano : SeguradoPlano;

  private segurado : Segurado;
  private endereco : Endereco;
  private seguradoPlanos: Array<SeguradoPlano>;

  private mensagemErro : string;
  private mensagemSucesso : string;

  constructor(private seguradoService : SeguradoService , 
    //@Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router: Router, private route: ActivatedRoute,
    private seguradoEventService: SeguradoEventService) { }

  ngOnInit() {

    /* console.log('[Seguro Saude] - Carregando segurado de CPF:' + this.storage.get('cpf') + '.')
    if (this.storage.get('cpf') != undefined &&
    this.storage.get('cpf') != ''){ */

      this.seguradoService.getSegurado( '11111111111'/*this.storage.get('cpf')*/)
      .subscribe(segurado => {
           this.nome = segurado.nome;
           this.cpf = segurado.cpf;
           this.numeroApolice = segurado.numeroApolice;
           this.dataNascimento = segurado.dataNascimento;
           this.email = segurado.email;
           this.sexo = segurado.sexo;
           this.cep = segurado.endereco.cep;
           this.logradouro= segurado.endereco.logradouro;
           this.numero = segurado.endereco.numero;
           this.bairro = segurado.endereco.bairro;
           this.cidade = segurado.endereco.cidade;
           this.uf = segurado.endereco.uf;
           this.complemento = segurado.endereco.complemento;
           this.telefone = segurado.telefone;
        }
      );

     /* } else {
      this.seguradoEventService.seguradoLogado.emit(false);
      this.storage.remove('cpf'); 
      this.router.navigate(['']);
     } */
    
  }

  buscaCepAtualiacao(cep){

    if (this.cep == null ) return;

    console.log('Executando o metodo de localizacao de endereco pelo cep => ' + this.cep);

    this.seguradoService.getEnderecoByCep(this.cep).
            subscribe(endereco => {
              this.logradouro = endereco.logradouro;
              this.bairro = endereco.bairro
              this.cidade = endereco.cidade
              this.uf = endereco.uf
            }
          )       
  }

  atualizarSegurado(){

    console.log('[Seguro Saude] -  Atualizando usuario de nome : ' + this.nome + ' .');

    this.segurado = new Segurado();
    this.segurado.dataNascimento = this.dataNascimento;
    this.segurado.email = this.email;
    this.segurado.cpf = this.cpf;

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

  //  var bodySeguradoJson = JSON.stringify(this.segurado);
  //  console.log(bodySeguradoJson);

    this.seguradoService.updateSegurado(this.segurado)
    .subscribe(retorno => {
              console.log('[Segurado Saude] -  Atualizacao : ' + retorno + ' .')
              this.mensagemSucesso = 'O Segurado foi atualizado com sucesso.'
           }  , 
           error => {
             this.mensagemErro = 'Não foi possível atualizar este Segurado.';
           }
      );
  }

  sair(){
    this.seguradoEventService.seguradoLogado.emit(false);
    //this.storage.remove('cpf');
    this.router.navigate(['']);
  }


}
