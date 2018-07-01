//Import Externos
import { Component, OnInit } from '@angular/core'

//Imports Internos
import { Question }         from '../question.model'
import { QuestionsService } from '../questions.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questionList: Question[]

  constructor(private questionsService: QuestionsService) { }

  async ngOnInit() {
    this.questionList = await this.questionsService.getQuestions()
  }

}
