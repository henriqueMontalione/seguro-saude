import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeguradoComponent } from './segurado/segurado.component';
import { SeguradoProfileComponent } from './segurado/segurado-profile/segurado-profile.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { ROUTES } from './app.routing';
import { SeguradoService } from './segurado/segurado.service';
import { HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    SeguradoComponent,
    SeguradoProfileComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [SeguradoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
