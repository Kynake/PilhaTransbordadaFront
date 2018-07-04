//Imports Externos
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

//Imports Internos
import { Question }         from '../question.model'
import { QuestionsService } from '../questions.service'
import { AnswerService } from '../../answer/answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = undefined

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private answerService: AnswerService) {}

  async ngOnInit() {
    this.question = await this.questionsService.getQuestionByID(this.route.snapshot.params['id'])
  }

  isCorrect(answerID: number) {
    this.answerService.acceptAnswer(answerID)
  }

  upvote() {
    this.questionsService.upvote(this.question.id)
  }

  downvote() {
    this.questionsService.downvote(this.question.id)
  }
}
