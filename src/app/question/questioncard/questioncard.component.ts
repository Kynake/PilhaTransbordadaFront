//Imports Externos
import { Component, OnInit, Input } from '@angular/core'

//Imports Internos
import { Question } from '../question.model'

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {

  @Input() question: Question

  constructor() { }

  ngOnInit() {
  }

}
