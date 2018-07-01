import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { AppComponent } from './app.component'
import { QuestionComponent } from './question/question.component'
import { QuestioncardComponent } from './questioncard/questioncard.component'
import { VoteComponent } from './vote/vote.component'
import { QuestionListComponent } from './question-list/question-list.component'

import { QuestionsService } from './backend/questions/questions.service'

import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestioncardComponent,
    VoteComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
