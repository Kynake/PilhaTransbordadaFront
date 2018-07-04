import { Component } from '@angular/core'
import { AuthService } from './auth/auth.service';
import { CreateQuestionComponent } from './question/create-question/create-question.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'

  constructor(
    private authService: AuthService
  ) {}

  logoff() {
    this.authService.logoff()
  }
}
