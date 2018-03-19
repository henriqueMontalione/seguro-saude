import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ENDERECO_SERVICE } from "../../app.api";
import { ErrorHandler } from "../app.error-handle";
import { SeguradoEndereco } from "./segurado-endereco.model";
import { RequestOptions } from '@angular/http';

import { Headers } from '@angular/http';



@Injectable()
export class SeguradoService{
    private _headers = new HttpHeaders()
    //.set('Accept-Encoding', 'gzip, deflate')
    .set('Accept', '*/*')
   // .set('Content-Type', 'application/x-www-form-urlencoded')
   // .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    //.set('Connection', 'keep-alive')
    .set('Host', 'http://localhost:4200')
    //.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36')
    ;
    /*{.set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    //.set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    response.setHeader("Access-Control-Max-Age", "3600");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    */

    constructor(private httpClient: HttpClient){
        
        console.log('Headers (Accept) => ' + this._headers.get('Accept'))

    }

    enderecoByCep(cep: string) : Observable<SeguradoEndereco> { 
    
        console.log('Acessando a URL => ' + `${ENDERECO_SERVICE}${cep}`)
        return this.httpClient.get<any>(`${ENDERECO_SERVICE}${cep}`, {headers : this._headers}).
        catch(ErrorHandler.handleError)
    }

}