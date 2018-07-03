//Imports Externos
import { Injectable }          from '@angular/core'
import { Router, CanActivate } from '@angular/router'

//Imports Internos
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  //Atributos
  //routedFrom: string = '' //Última rota que foi acessada com o CanActivate() = false

  //Construtor
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  //Métodos
  canActivate(): boolean {
    if(this.authService.isLoggedIn()){
      return true
    }

    console.log('Você não está logado!')
    
    this.router.navigate(['/'])
    return false
  }
}