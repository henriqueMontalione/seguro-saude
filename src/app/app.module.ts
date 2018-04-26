import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeguradoComponent } from './segurado/segurado.component';
import { SeguradoProfileComponent } from './segurado/segurado-profile/segurado-profile.component';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { ROUTES } from './app.routing';
import { SeguradoService } from './segurado/segurado.service';
import { HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { ReferenciadoComponent } from './referenciado/referenciado.component';
import { RedeListaComponent } from './referenciado/rede-lista/rede-lista.component';
import { SeguradoLoginRegisterComponent } from './segurado/segurado-login-register/segurado-login-register.component';
import { ReferenciadoService } from './referenciado/referenciado.service';

import { StorageServiceModule} from 'angular-webstorage-service';

import {NgxMaskModule} from 'ngx-mask';
import { SeguradoViewComponent } from './segurado/segurado-view/segurado-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeguradoEventService } from './segurado/segurado-event.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import * as firebase from 'firebase';
import { LoginComponent } from './login/login.component';
import { LogarComponent } from './logar/logar.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    SeguradoComponent,
    SeguradoProfileComponent,
    ReferenciadoComponent,
    RedeListaComponent,
    SeguradoLoginRegisterComponent,
    SeguradoViewComponent,
    LoginComponent,
    LogarComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    NgxMaskModule.forRoot(),
    StorageServiceModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [SeguradoService, ReferenciadoService , SeguradoEventService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
