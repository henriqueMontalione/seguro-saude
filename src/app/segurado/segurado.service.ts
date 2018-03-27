import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import {  PLANO_GET_SERVICE, ENDERECO_GET_SERVICE, SEGURADO_SERVICE} from "../../app.api";
import { ErrorHandler } from "../app.error-handle";
import { SeguradoPlano } from "../shared/segurado-plano.model";
import { Endereco } from "../shared/endereco.model";
import { _headers_get, _headers_post_put } from "../app.api-util";
import { SeguradoConfirmacaoCadastro } from "../shared/segurado-confirmacao-cadastro.model";
import { Segurado } from "../shared/segurado.model";


@Injectable()
export class SeguradoService{
  
    constructor(private httpClient: HttpClient){}

    getEnderecoByCep(cep: string) : Observable<Endereco> { 
    
        console.log('[Segurado Saude] - Acessando a URL => ' + `${ENDERECO_GET_SERVICE}${cep}`);

        return this.httpClient.get<Endereco[]>(`${ENDERECO_GET_SERVICE}${cep}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }

    getSegurado(cpf:string) : Observable<Segurado> { 
        console.log('[Segurado Saude] - Acessando a URL => ' + `${SEGURADO_SERVICE}`);

        return this.httpClient.get<Segurado[]>(`${SEGURADO_SERVICE}/${cpf}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }
    
    getPlanos() : Observable<SeguradoPlano[]> { 
        console.log('[Segurado Saude] - Acessando a URL => ' + `${PLANO_GET_SERVICE}`);

        return this.httpClient.get<SeguradoPlano[]>(`${PLANO_GET_SERVICE}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }


    saveSegurado(segurado: Segurado) : Observable<SeguradoConfirmacaoCadastro> {
        
        return this.httpClient.post<SeguradoConfirmacaoCadastro>(`${SEGURADO_SERVICE}` , segurado , {headers : _headers_post_put});
    }

    updateSegurado(segurado: Segurado) : Observable<any> {
        const cpf : string = segurado.cpf;
        return this.httpClient.put<any>(`${SEGURADO_SERVICE}/${cpf}` , segurado , {headers :_headers_post_put});
    }

}