//Imports Externos
import { Routes } from '@angular/router'

//Imports Internos
import { LoginComponent }        from './login/login.component'
import { QuestionListComponent } from './question/question-list/question-list.component'
import { QuestionComponent }     from './question/question/question.component'
import { AuthGuardService }      from './auth/auth-guard.service'
import { CreateQuestionComponent } from './question/create-question/create-question.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createquestion', component: CreateQuestionComponent, canActivate: [AuthGuardService]},
  { path: 'questions', component: QuestionListComponent  },
  { path: 'questions/:id', component: QuestionComponent  }
]