import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { SeguradoProfileComponent } from './segurado/segurado-profile/segurado-profile.component';
import { RedeListaComponent } from './referenciado/rede-lista/rede-lista.component';
import { SeguradoLoginRegisterComponent } from './segurado/segurado-login-register/segurado-login-register.component';
import { SeguradoViewComponent } from './segurado/segurado-view/segurado-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';


/* Rotas de navegacao */
export const ROUTES: Routes  = [
                      { path : '', component: LoginComponent },
                      { path: 'segurado-login-register', component: SeguradoLoginRegisterComponent},
                      { path : 'segurado-profile', canActivate: [AuthGuardService], component : SeguradoProfileComponent},
                      { path: 'segurado-view', canActivate: [AuthGuardService], component : SeguradoViewComponent},
                      { path : 'rede-lista', canActivate: [AuthGuardService], component : RedeListaComponent}
                    ];

