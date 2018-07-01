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

  constructor(private http: HttpClient) { }

  async getQuestions(): Promise<Question[]> {
    return this.questionList
  }

  async getQuestionByID(id: number): Promise<Question> {
    return this.questionList[id-1]
  }

}
