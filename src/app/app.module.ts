import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestioncardComponent } from './questioncard/questioncard.component';
import { VoteComponent } from './vote/vote.component';

import { ROUTES } from './app.routes';
import { QuestionListComponent } from './question-list/question-list.component'


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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
