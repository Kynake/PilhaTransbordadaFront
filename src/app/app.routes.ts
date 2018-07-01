import { Routes } from '@angular/router'

import { QuestionListComponent } from './question-list/question-list.component'
import { QuestionComponent } from './question/question.component'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionListComponent  },
  { path: 'questions/:id', component: QuestionComponent  }
]