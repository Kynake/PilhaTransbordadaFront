//Import Externos
import { BrowserModule }            from '@angular/platform-browser'
import { RouterModule }             from '@angular/router'
import { NgModule }                 from '@angular/core'
import { HttpClientModule }         from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome'

//Imports Internos

//Componentes
import { AppComponent }          from './app.component'
import { QuestionComponent }     from './question/question/question.component'
import { QuestioncardComponent } from './question/questioncard/questioncard.component'
import { QuestionListComponent } from './question/question-list/question-list.component'
import { VoteComponent }         from './vote/vote.component'
import { CommentComponent }      from './comment/comment/comment.component'

//Serviços
import { QuestionsService } from './question/questions.service'

//Outros
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestioncardComponent,
    VoteComponent,
    QuestionListComponent,
    CommentComponent
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
