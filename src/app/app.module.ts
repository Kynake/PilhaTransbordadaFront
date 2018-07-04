//Import Externos
import { BrowserModule }            from '@angular/platform-browser'
import { RouterModule }             from '@angular/router'
import { NgModule }                 from '@angular/core'
import { ReactiveFormsModule }      from '@angular/forms'
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
import { AuthService }      from './auth/auth.service'
import { AuthGuardService } from './auth/auth-guard.service'
import { AnswerService }    from './answer/answer.service'

//Outros
import { ROUTES } from './app.routes';
import { AnswerComponent } from './answer/answer/answer.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { CreateQuestionComponent } from './question/create-question/create-question.component';
import { CreateAnswerComponent } from './answer/create-answer/create-answer.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestioncardComponent,
    VoteComponent,
    QuestionListComponent,
    CommentComponent,
    AnswerComponent,
    UserComponent,
    LoginComponent,
    CreateQuestionComponent,
    CreateAnswerComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    QuestionsService,
    AuthService,
    AuthGuardService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
