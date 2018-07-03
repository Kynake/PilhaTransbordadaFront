//Imports Externos
import { Routes } from '@angular/router'

//Imports Internos
import { LoginComponent }        from './login/login.component'
import { QuestionListComponent } from './question/question-list/question-list.component'
import { QuestionComponent }     from './question/question/question.component'
import { AuthGuardService }      from './auth/auth-guard.service'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'questions', component: QuestionListComponent  },
  { path: 'questions/:id', component: QuestionComponent  }
]