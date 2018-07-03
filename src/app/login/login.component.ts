//Imports Externos
import { Component, OnInit }                  from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router }                             from '@angular/router'

//Imports Internos
import { AuthService } from '../auth/auth.service'
import { LoggedUser }  from '../auth/logged-user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Atributos
  loginForm: FormGroup

  loading: boolean = false //Indica se o botão de login foi pressionado e a página está buscando informações do banco

  //Construtor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  //Métodos
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required])
    })
  }

  async login() {
    this.loading = true

    console.log(this.loginForm.value)

    const response: LoggedUser = await this.authService.login(this.loginForm.value.email)
    console.log(response)

    if(response.token === undefined){ //Authentication failed
      console.log('Login Inválido')
    }
    else{ //Authentication successful
      console.log(response);
      this.router.navigate([''])
    }
    this.loading = false
  }
}
