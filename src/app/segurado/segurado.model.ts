import { Endereco } from "../shared/endereco.model";


export class Segurado{

    public nome: string
     public email: string;
     public cpf: string;
     public dataNascimento: string;
     public sexo: string;
     public telefone: string;
     public senha: string;
     public planoId: string;
     public endereco : Endereco;

    constructor(){}
  }