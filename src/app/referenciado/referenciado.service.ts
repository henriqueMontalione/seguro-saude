import { Referenciado } from './../shared/referenciado.model';
import { LOCALIZACAO_SERVICE_SWAGGER, LOCALIZACAO_GET_SERVICE, REFERENCIADO_GET_SERVICE, ESPECIALIDADE_GET_SERVICE } from './../../app.api';
import { ReferenciadoLocalizacao } from './../shared/referenciadoLocalizacao.model';
import { Injectable } from '@angular/core';
import { ReferenciadoEspecialidade } from '../shared/referenciadoEspecialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handle';
import 'rxjs/add/operator/catch';
import { _headers_get } from '../app.api-util';

@Injectable()
export class ReferenciadoService {

    constructor(private httpClient: HttpClient) {}

    getEspecialidade(): Observable<ReferenciadoEspecialidade[]> {
        console.log('Acessando a URL => ' + `${ESPECIALIDADE_GET_SERVICE} .`);
        return this.httpClient.get<ReferenciadoEspecialidade[]>(`${ESPECIALIDADE_GET_SERVICE}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError);
    }

    getLocalizacao(): Observable<ReferenciadoLocalizacao[]> {
        console.log('[Seguro Saude] - Acessando a URL => ' + `${LOCALIZACAO_GET_SERVICE}/1/cidade/rio de janeiro/bairro .`);
        return this.httpClient
        .get<ReferenciadoLocalizacao[]>(`${LOCALIZACAO_GET_SERVICE}/5/cidade/rio de janeiro/bairro`, {headers : _headers_get}).
        catch(ErrorHandler.handleError);
    }

    getReferenciado(especialidadeId: string, bairro: string): Observable<Referenciado[]> {
        console.log('[Seguro Saude] - Acessando a URL => ' + `${REFERENCIADO_GET_SERVICE}${especialidadeId} .` );
        return this.httpClient
        .get<Referenciado[]>(`${REFERENCIADO_GET_SERVICE}${especialidadeId}&bairro=${bairro}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError);
    }
}
