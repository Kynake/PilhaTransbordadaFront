import { Component, OnInit } from '@angular/core'

import { Question } from '../model/question.model'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questionList: Question[] = [
    {
      id: 1,
      title: 'Como subir a API pro Heroku?',
      score: 30,
      content: ['Eu não to conseguindo fazer integração contínua no Heroku']
    },
    {
      id: 2,
      title: 'Como clonar um projeto do Github?',
      score: -54,
      content: ['Eu não sei procurar no Google','plz ajuda!!!!!!!!!!!']
    },
    {
      id: 3,
      title: 'Como diferenciar caquis normais de caquis traventos?',
      score: 945,
      content: ['Como todos sabemos, Alguns caquis tem poderes mágicos. Eles são capazes de travar a língua antes de serem comidos.', 
      'Existe alguma maneira de reconhecê-los à vista?']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
