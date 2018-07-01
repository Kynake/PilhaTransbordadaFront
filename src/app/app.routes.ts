//Imports Externos
import { Routes } from '@angular/router'

//Imports Internos
import { QuestionListComponent } from './question/question-list/question-list.component'
import { QuestionComponent } from './question/question/question.component'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionListComponent  },
  { path: 'questions/:id', component: QuestionComponent  }
]