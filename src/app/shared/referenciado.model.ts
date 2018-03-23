import { ReferenciadoEspecialidade } from './referenciadoEspecialidade.model';
import { Endereco } from './endereco.model';
export class Referenciado {
    id: string;
    nome: string;
    telefone: string;
    horaInicioAtendimento: string;
    horaFimAtendimento: string;
    especialidade: ReferenciadoEspecialidade;
    endereco: Endereco;

    constructor () {}
    
}
