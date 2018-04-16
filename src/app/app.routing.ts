import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SeguradoProfileComponent } from './segurado/segurado-profile/segurado-profile.component';
import { RedeListaComponent } from './referenciado/rede-lista/rede-lista.component';
import { SeguradoLoginRegisterComponent } from './segurado/segurado-login-register/segurado-login-register.component';
import { SeguradoViewComponent } from './segurado/segurado-view/segurado-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuardService } from './services/auth-guard.service';

/* Rotas de navegacao */
export const ROUTES: Routes  = [
                      { path: '', component: SeguradoLoginRegisterComponent},
                      { path : 'segurado-profile', canActivate: [AuthGuardService], component : SeguradoProfileComponent},
                      { path: 'segurado-view', canActivate: [AuthGuardService], component : SeguradoViewComponent},
                      { path : 'rede-lista', canActivate: [AuthGuardService], component : RedeListaComponent}
                    ];

