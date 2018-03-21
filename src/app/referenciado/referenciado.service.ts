import { Injectable } from '@angular/core';
import { ReferenciadoEspecialidade } from './referenciadoEspecialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ESPECIALIDADE_SERVICE } from '../../app.api';
import { ErrorHandler } from '../app.error-handle';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReferenciadoService {

     private _headers = new HttpHeaders()
     .set('Accept', 'application/json').set('Host', 'http://localhost:4200');

    constructor(private httpClient: HttpClient) {}

    getEspecialidade(): Observable<ReferenciadoEspecialidade[]> {
        console.log('Acessando a URL => ' + `${ESPECIALIDADE_SERVICE}especialidade`);
        return this.httpClient.get<ReferenciadoEspecialidade[]>(`${ESPECIALIDADE_SERVICE}especialidade`, {headers : this._headers}).
        catch(ErrorHandler.handleError);
    }
}
