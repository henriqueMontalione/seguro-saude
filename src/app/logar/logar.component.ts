import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SeguradoEventService } from './../segurado/segurado-event.service';
import { SeguradoService } from './../segurado/segurado.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
})
export class LogarComponent implements OnInit {

  user = {
    loginEmail: '',
    password: ''
  };

  private mensagemErro: string;

  constructor(private router: Router, private auth: AuthService,
              private seguradoService: SeguradoService, 
              private seguradoEventService: SeguradoEventService) { }

  ngOnInit() {
  }

  logarSegurado() {

    this.seguradoService.getSegurado(this.user.loginEmail)
    .subscribe(segurado => {
        console.log('logarsegurado()');      
        this.seguradoEventService.seguradoLogado.emit(true);
        this.router.navigate(['segurado-view']);
      }, 
        error => {
        this.mensagemErro = 'Segurado não localizado, compre seu Plano agora !';
        this.seguradoEventService.seguradoLogado.emit(false);
      }
    );
  }

  signInWithEmail() {
    this.auth.signInRegular(this.user.loginEmail, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['segurado-view']);
       })
       .catch((err) => console.log('error: ' + err));
 }

  signInWithTwitter() {
    this.auth.signInWithTwitter()
    .then((res) => { 
      console.log('roteando para segurado-view');
     this.router.navigate(['segurado-view']);
    })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle()
    .then((res) => { 
      console.log('roteando para segurado-view');
     this.router.navigate(['segurado-view']);
   })
   .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.auth.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['segurado-view']);
      })
    .catch((err) => console.log(err));
  }

}
