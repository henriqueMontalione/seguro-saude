import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ENDERECO_SERVICE, PLANO_SERVICE } from "../../app.api";
import { ErrorHandler } from "../app.error-handle";
import { SeguradoEndereco } from "./segurado-endereco.model";

import { SeguradoPlano } from "./segurado-plano.model";



@Injectable()
export class SeguradoService{
    private _headers = new HttpHeaders()
    //.set('Accept-Encoding', 'gzip, deflate')
   // .set('Accept', '*/*')
   // .set('Content-Type', 'application/x-www-form-urlencoded')
   // .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    //.set('Connection', 'keep-alive')
    .set('Host', 'http://localhost:4200');
    //.set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')


    constructor(private httpClient: HttpClient){}

    enderecoByCep(cep: string) : Observable<SeguradoEndereco> { 
    
        console.log('Acessando a URL => ' + `${ENDERECO_SERVICE}${cep}`)

        return this.httpClient.get<SeguradoEndereco[]>(`${ENDERECO_SERVICE}${cep}`, {headers : this._headers}).
        catch(ErrorHandler.handleError)
    }

    planos() : Observable<SeguradoPlano> { 
    
        console.log('Acessando a URL => ' + `${PLANO_SERVICE}`)
        return this.httpClient.get<SeguradoPlano[]>(`${PLANO_SERVICE}`, {headers : this._headers}).
        catch(ErrorHandler.handleError)
    }

}