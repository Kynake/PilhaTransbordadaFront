//Imports Externos
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//Imports Internos
import { Question } from './question.model'
import { QUESTIONS } from '../db.model';

@Injectable()
export class QuestionsService {

  questionList: Question[] = QUESTIONS

  constructor(private http: HttpClient) { }

  async getQuestions(): Promise<Question[]> {
    return this.questionList
  }

  async getQuestionByID(id: number): Promise<Question> {
    return this.questionList[id-1]
  }

}
