//Imports Externos
import { Injectable }              from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import                                  'rxjs/add/operator/toPromise'

//Imports Internos
import { Question } from './question.model'
import { API, APIResponse } from '../db.model';
import { Answer } from '../answer/answer.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  async getQuestions(): Promise<Question[]> {
    let response = await this.http.get<APIResponse>(`${API}/questions`).toPromise()
    console.log(response)
    
    return response.content
  }

  async getQuestionByID(id: number): Promise<Question> {
    let response = await this.http.get<APIResponse>(`${API}/questions/${id}`).toPromise()
    response.content.otherAnswers = response.content.answers

    console.log(response)
    return response.content
  }

  async createQuestion(question: Question): Promise<Question> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
      .post<APIResponse>(`${API}/questions/create`, {question: question}, {headers: headers}).toPromise()

    if(apiResponse.success){
      return apiResponse.content
    } else {
      return {
        id: undefined,
        content: undefined,
        title: undefined,
        user: undefined
      }
    }
  }

  async createAnswer(questionID: number, content: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 
    console.log({answer: {content: content}});
    
    const apiResponse: APIResponse = await this.http
      .post<APIResponse>(`${API}/questions/addAnswer/${questionID}`, {answer: {content: content}}, {headers: headers}).toPromise()

    window.location.reload()
    return apiResponse.content
  }

  async createComment(questionID, content: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
      .post<APIResponse>(`${API}/questions/addComment/${questionID}`, {comment: {content: content}}, {headers: headers}).toPromise()

    window.location.reload()  
    return apiResponse.content
  } 

  async upvote(questionID: number) {
    const headers: HttpHeaders = new HttpHeaders({
      'x-access-token': this.auth.getToken()
    }) 

    console.log('-------------------');
    
    const apiResponse: APIResponse = await this.http
      .get<APIResponse>(`${API}/questions/upvote/${questionID}`, {headers: headers}).toPromise()

    console.log(apiResponse);
    

    return apiResponse.content
  }

  async downvote(questionID: number) {
    const headers: HttpHeaders = new HttpHeaders({
      'x-access-token': this.auth.getToken()
    }) 

    console.log('-------------------');
    
    const apiResponse: APIResponse = await this.http
      .get<APIResponse>(`${API}/questions/downvote/${questionID}`, {headers: headers}).toPromise()

    console.log(apiResponse);
    

    return apiResponse.content
  }
}
