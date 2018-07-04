import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { APIResponse, API } from '../db.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AnswerService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  async acceptAnswer(answerID: number) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
    .get<APIResponse>(`${API}/answers/accept/${answerID}`, {headers: headers}).toPromise()

    return apiResponse.content
  }

  async createComment(answerID: number, content: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
    .post<APIResponse>(`${API}/answers/addComment/${answerID}`, {comment: content}, {headers: headers}).toPromise()

    return apiResponse.content
  }

  async upvote(answerID: number){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
    .get<APIResponse>(`${API}/answers/upvote/${answerID}`, {headers: headers}).toPromise()

    return apiResponse.content
  }

  async downvote(answerID: number){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    }) 

    const apiResponse: APIResponse = await this.http
    .get<APIResponse>(`${API}/answers/downvote/${answerID}`, {headers: headers}).toPromise()

    return apiResponse.content
  }
}
