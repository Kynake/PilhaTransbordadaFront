//Imports Externos
import { Injectable }              from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import                                  'rxjs/add/operator/toPromise'

//Imports Internos
import { Question } from './question.model'
import { QUESTIONS, KEY, API, APIResponse } from '../db.model';
import { Answer } from '../answer/answer.model';

@Injectable()
export class QuestionsService {

  questionList: Question[] = QUESTIONS

  constructor(private http: HttpClient) { }

  async getQuestions(): Promise<Question[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-access-token': KEY
    })

    let response = await this.http.get<APIResponse>(`${API}/questions`, {headers: headers}).toPromise()
    console.log(response)
    
    return response.content
  }

  async getQuestionByID(id: number): Promise<Question> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-access-token': KEY
    })

    let response = await this.http.get<APIResponse>(`${API}/questions/${id}`, {headers: headers}).toPromise()
    
    // delete response.content.RightAnswerId
    // delete response.content.createdAt
    // delete response.content.updatedAt

    response.content.comments = response.content.Comments
    // delete response.content.Comments

    response.content.correctAnswer = response.content.RightAnswer
    // delete response.content.RightAnswer

    response.content.otherAnswers = response.content.Answers
    // delete response.content.Answers

    response.content.content = [response.content.content]

    response.content.correctAnswer.content = [response.content.correctAnswer.content]

    for (let i = 0; i < response.content.otherAnswers.length; i++) {
      response.content.otherAnswers[i].content = [response.content.otherAnswers[i].content]
    }


    console.log(response)
    return response.content
  }

  async createQuestion(question: Question): Promise<Question> {
    return
  }

  async deleteQuestion(questionID: number): Promise<Question> {
    return
  }

  async addAnswer(answer: Answer) {
    return
  }

  async addComment(comment: Comment) {
    return
  } 

}
