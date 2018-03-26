import { Component, OnInit, Inject } from '@angular/core';
import { SeguradoService } from '../segurado.service';
import { Endereco } from '../../shared/endereco.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-segurado-profile',
  templateUrl: './segurado-profile.component.html'
})
export class SeguradoProfileComponent implements OnInit {

  private endereco : Endereco
  private cep: string
  private logradouro:string
  private bairro : string
  private cidade: string
  private uf : string
  public data:any=[]

  constructor(private seguradoService : SeguradoService , 
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    
  
  }

  buscaCep(){
    console.log('Executando o metodo de localizacao de endereco pelo cep => ' + this.cep)
    this.seguradoService.getEnderecoByCep(this.cep).
            subscribe(endereco => {
              this.logradouro = endereco.logradouro;
              console.log(endereco.logradouro)
              this.bairro = endereco.bairro
              this.cidade = endereco.cidade
              this.uf = endereco.uf
            }
          )       
  }
  

  temp(){
    console.log('CPF> ' + this.storage.get('cpf'));
 

  }

}
