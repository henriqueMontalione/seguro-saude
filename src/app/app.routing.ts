import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SeguradoProfileComponent } from './segurado/segurado-profile/segurado-profile.component';
import { RedeListaComponent } from './referenciado/rede-lista/rede-lista.component';

export const ROUTES: Routes  =[
                      { path: '', component: MainComponent},
                      { path : 'segurado-profile', component : SeguradoProfileComponent},
                      { path : 'rede-lista', component : RedeListaComponent}
                    ]

