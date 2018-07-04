//Imports Externos
import { Component, OnInit, Input } from '@angular/core'

//Imports Internos
import { Question } from '../question.model'
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {

  @Input() question: Question

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  upvote() {
    this.questionsService.upvote(this.question.id)
  }

  downvote() {
    this.questionsService.downvote(this.question.id)
  }
}
