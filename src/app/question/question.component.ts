import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Question } from '../model/question.model'
import { QuestionsService } from '../backend/questions/questions.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = undefined

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    console.log('question component log');
    this.question = await this.questionsService.getQuestionByID(this.route.snapshot.params['id'])
    console.log(this.question)
  }
}
