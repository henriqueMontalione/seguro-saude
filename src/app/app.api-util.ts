import { HttpClient, HttpHeaders } from '@angular/common/http';

export const _headers_get = new HttpHeaders()
//.set('Content-Type', 'application/x-www-form-urlencoded')
//.set('Host', 'http://localhost:4200');

export const _headers_post = new HttpHeaders()
.set('Content-Type', 'application/json');
