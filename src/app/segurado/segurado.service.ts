import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ENDERECO_SERVICE, PLANO_SERVICE } from "../../app.api";
import { ErrorHandler } from "../app.error-handle";
import { Segurado } from "./segurado.model";
import { SeguradoPlano } from "../shared/segurado-plano.model";
import { Endereco } from "../shared/endereco.model";



@Injectable()
export class SeguradoService{
    private _headers = new HttpHeaders()
    //.set('Accept-Encoding', 'gzip, deflate')
   // .set('Accept', '*/*')
    .set('Content-Type', 'application/x-www-form-urlencoded')
   // .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    //.set('Host', 'http://localhost:4200');

    private _headers_post = new HttpHeaders()
    //.set('Accept-Encoding', 'gzip, deflate')
   // .set('Accept', '*application/json')
    .set('Content-Type', 'application/json')
    //.set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')



    

    /*private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };*/


    constructor(private httpClient: HttpClient){}

    enderecoByCep(cep: string) : Observable<Endereco> { 
    
        console.log('Acessando a URL => ' + `${ENDERECO_SERVICE}${cep}`)

        return this.httpClient.get<Endereco[]>(`${ENDERECO_SERVICE}${cep}`, {headers : this._headers}).
        catch(ErrorHandler.handleError)
    }

    
    planos() : Observable<SeguradoPlano[]> { 
        console.log('Acessando a URL => ' + `${PLANO_SERVICE}`)
        return this.httpClient.get<SeguradoPlano[]>(`${PLANO_SERVICE}`, {headers : this._headers}).
        catch(ErrorHandler.handleError)
    }

    criarSegurado(segurado: Segurado) : Observable<Segurado> {
        const url : string = 'http://192.168.0.170:8080/segurado';
        return this.httpClient.post<Segurado>(url , segurado , {headers : this._headers_post});
    }

}