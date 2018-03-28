import { HttpClient, HttpHeaders } from '@angular/common/http';

/* Cabecalhos HTTP */
export const _headers_get = new HttpHeaders();
export const _headers_post_put = new HttpHeaders()
.set('Accept', 'application/json')
.set('Content-Type', 'application/json');
/*.set('Accept-Encoding', 'gzip, deflate')
.set('Connection', 'keep-alive')
.set('Content-Length', 'application/json')
.set('Host', '192.168.0.170:8080')
.set('Origin', 'chrome-extension://aejoelaoggembcahagimdiliamlcdmfm')
.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36')
;*/





