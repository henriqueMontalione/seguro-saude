import { Endereco } from "../shared/endereco.model";
import { SeguradoPlano } from "./segurado-plano.model";


export class Segurado{

     public nome: string
     public email: string;
     public cpf: string;
     public dataNascimento: string;
     public sexo: string;
     public telefone: string;
     public senha: string;
     public numeroApolice : string;
     public endereco : Endereco;
     public plano : SeguradoPlano; 
     
    constructor(){}
  }