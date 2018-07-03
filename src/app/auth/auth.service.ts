//Imports Externos
import { Injectable }              from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router }                  from '@angular/router'
import                                  'rxjs/add/operator/toPromise'

//Imports Internos
import { API, APIResponse } from '../db.model'
import { LoggedUser }       from "./logged-user.model"

@Injectable()
export class AuthService {
  //Atributos

  //Construtor  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  //Métodos
  
  getLoggedUser(): LoggedUser {
    return this.isLoggedIn()?
      { 
        email: sessionStorage.getItem('email'),
        token: sessionStorage.getItem('token')
      } : undefined
  }

  //Get Email
  getEmail(): string { return this.isLoggedIn()? sessionStorage.getItem('emial') : undefined }

  //Get Token
  getToken(): string { return this.isLoggedIn()? sessionStorage.getItem('token') : undefined }

  async login(email: string): Promise<LoggedUser> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    }) 

    const apiResponse: APIResponse = await this.http
      .post<APIResponse>(`${API}/login`, {user: {email: email}}, {headers: headers}).toPromise()

    if(apiResponse.success){
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('token', apiResponse.content)

      return {
        email: email,
        token: apiResponse.content
      }
    }

    return {
      email: undefined,
      token: undefined
    } 
  }

  logoff() {
    console.log('authservice logoff')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('token')

    this.router.navigate(['/'])
  }

  isLoggedIn(): boolean { return sessionStorage.getItem('token') !== null }
} 