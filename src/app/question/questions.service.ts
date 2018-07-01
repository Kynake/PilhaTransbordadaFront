//Imports Externos
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//Imports Internos
import { Question } from './question.model'

@Injectable()
export class QuestionsService {

  questionList: Question[] = [
    {
      id: 1,
      title: 'Como subir a API pro Heroku?',
      score: 30,
      content: ['Eu não to conseguindo fazer integração contínua no Heroku'],
      comments: [
        {
          id: 1,
          score: -2,
          content: 'qwe'
        }, {
          id: 2,
          score: 0,
          content: 'rty'
        }
      ]
    },
    {
      id: 2,
      title: 'Como clonar um projeto do Github?',
      score: -54,
      content: ['Eu não sei procurar no Google','plz ajuda!!!!!!!!!!!'],
      comments: [
        {
          id: 3,
          score: 23,
          content: 'asd'
        },
        {
          id: 4,
          score: 2,
          content: 'fgh'
        }
      ]
    },
    {
      id: 3,
      title: 'Como diferenciar caquis normais de caquis traventos?',
      score: 945,
      content: ['Como todos sabemos, Alguns caquis tem poderes mágicos. Eles são capazes de travar a língua antes de serem comidos.', 
      'Existe alguma maneira de reconhecê-los à vista?'],
      comments: [
        {
          id: 5,
          score: 12,
          content: 'zxc'
        },
        {
          id: 6,
          score: 7,
          content: 'vbn'
        }
      ]
    }
  ]

  constructor(private http: HttpClient) { }

  async getQuestions(): Promise<Question[]> {
    return this.questionList
  }

  async getQuestionByID(id: number): Promise<Question> {
    return this.questionList[id-1]
  }

}
