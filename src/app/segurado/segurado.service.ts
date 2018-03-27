import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import {  PLANO_GET_SERVICE, ENDERECO_GET_SERVICE, SEGURADO_POST_SERVICE, SEGURADO_GET_SERVICE, SEGURADO_PUT_SERVICE } from "../../app.api";
import { ErrorHandler } from "../app.error-handle";
import { SeguradoPlano } from "../shared/segurado-plano.model";
import { Endereco } from "../shared/endereco.model";
import { _headers_get, _headers_post, _headers_get_form } from "../app.api-util";
import { SeguradoConfirmacaoCadastro } from "../shared/segurado-confirmacao-cadastro.model";
import { Segurado } from "../shared/segurado.model";


@Injectable()
export class SeguradoService{
  
    constructor(private httpClient: HttpClient){}

    getEnderecoByCep(cep: string) : Observable<Endereco> { 
    
        console.log('Acessando a URL => ' + `${ENDERECO_GET_SERVICE}${cep}`);

        return this.httpClient.get<Endereco[]>(`${ENDERECO_GET_SERVICE}${cep}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }

    getSegurado(cpf:string) : Observable<Segurado> { 
        console.log('Acessando a URL => ' + `${SEGURADO_GET_SERVICE}`);

        return this.httpClient.get<Segurado[]>(`${SEGURADO_GET_SERVICE}/${cpf}`, {headers : _headers_get_form}).
        catch(ErrorHandler.handleError)
    }
    
    getPlanos() : Observable<SeguradoPlano[]> { 
        console.log('Acessando a URL => ' + `${PLANO_GET_SERVICE}`);

        return this.httpClient.get<SeguradoPlano[]>(`${PLANO_GET_SERVICE}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }

    getPlano(planoId : string) : Observable<SeguradoPlano> { 
        console.log('Acessando a URL => ' + `${PLANO_GET_SERVICE}`);

        return this.httpClient.get<SeguradoPlano[]>(`${PLANO_GET_SERVICE}/${planoId}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError)
    }

    saveSegurado(segurado: Segurado) : Observable<SeguradoConfirmacaoCadastro> {
        return this.httpClient.post<SeguradoConfirmacaoCadastro>(`${SEGURADO_POST_SERVICE}` , segurado , {headers : _headers_post});
    }

    updateSegurado(segurado: Segurado) : Observable<string[]> {
        return this.httpClient.put<string[]>(`${SEGURADO_PUT_SERVICE}` , segurado , {headers : _headers_post});
    }

}