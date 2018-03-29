import { Referenciado } from './../shared/referenciado.model';
import { LOCALIZACAO_SERVICE_SWAGGER, LOCALIZACAO_GET_SERVICE, REFERENCIADO_GET_SERVICE, ESPECIALIDADE_GET_SERVICE } from './../../app.api';
import { ReferenciadoLocalizacao } from './../shared/referenciadoLocalizacao.model';
import { Injectable } from '@angular/core';
import { ReferenciadoEspecialidade } from '../shared/referenciadoEspecialidade.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handle';
import 'rxjs/add/operator/catch';
import { _headers_get } from '../app.api-util';


export const SIZE_PAGE_REFERENCIADO : number = 5;

@Injectable()
export class ReferenciadoService {

    private initPage : number = 0;

    constructor(private httpClient: HttpClient) {}

    getEspecialidade(): Observable<ReferenciadoEspecialidade[]> {
        console.log('Acessando a URL => ' + `${ESPECIALIDADE_GET_SERVICE} .`);
        return this.httpClient.get<ReferenciadoEspecialidade[]>(`${ESPECIALIDADE_GET_SERVICE}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError);
    }

    getLocalizacao(planoId: string, cidade: string, especialidadeId: string): Observable<ReferenciadoLocalizacao[]> {
        console.log('[Seguro Saude] - Acessando a URL Localizacao => ' + `${LOCALIZACAO_GET_SERVICE}${planoId}/cidade/${cidade}/bairro?especialidadeId=${especialidadeId} .`);
        return this.httpClient
        .get<ReferenciadoLocalizacao[]>(`${LOCALIZACAO_GET_SERVICE}${planoId}/cidade/${cidade}/bairro?especialidadeId=${especialidadeId}`, {headers : _headers_get}).
        catch(ErrorHandler.handleError);
    }

    getReferenciado(especialidadeId: string, bairro: string, planoId: string, cidade: string, initPage:number): Observable<Referenciado[]> {
        
        console.log('[Seguro Saude] - Acessando a URL => ' + `${REFERENCIADO_GET_SERVICE}/${planoId}/cidade/${cidade}?especialidadeId=${especialidadeId}&bairro=${bairro} .` );
        
        if (bairro != '' && (especialidadeId == '' || especialidadeId == '0') ) {      
            return this.httpClient
            .get<Referenciado[]>(`${REFERENCIADO_GET_SERVICE}/${planoId}/cidade/${cidade}?bairro=${bairro}&pageStart=${initPage}&pageSize=${SIZE_PAGE_REFERENCIADO}`, {headers : _headers_get}).
            catch(ErrorHandler.handleError);

        } else if (especialidadeId != '' && especialidadeId != '0' && bairro == '') {
            return this.httpClient
            .get<Referenciado[]>(`${REFERENCIADO_GET_SERVICE}/${planoId}/cidade/${cidade}?especialidadeId=${especialidadeId}&pageStart=${initPage}&pageSize=${SIZE_PAGE_REFERENCIADO}`, {headers : _headers_get}).
            catch(ErrorHandler.handleError);      

        } else if (bairro !='' && (especialidadeId != '' && especialidadeId != '0')){
            return this.httpClient
            .get<Referenciado[]>(`${REFERENCIADO_GET_SERVICE}/${planoId}/cidade/${cidade}?especialidadeId=${especialidadeId}&bairro=${bairro}&pageStart${initPage}&pageSize=${SIZE_PAGE_REFERENCIADO}`, {headers : _headers_get}).
            catch(ErrorHandler.handleError);
        } 
    }
}
