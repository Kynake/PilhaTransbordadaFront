import { Component, OnInit, Input } from '@angular/core';

import { Answer } from '../answer.model';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer: Answer

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
  }

  upvote() {
    this.answerService.upvote(this.answer.id)
  }

  downvote() {
    this.answerService.downvote(this.answer.id)
  }

}
