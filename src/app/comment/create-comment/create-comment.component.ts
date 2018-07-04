import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { QuestionsService } from '../../question/questions.service';
import { Question } from '../../question/question.model';
import { User } from '../../user/user.model';
import { APIResponse } from '../../db.model';
import { Answer } from '../../answer/answer.model';
import { AnswerService } from '../../answer/answer.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  //Atributos
  @Input() questionID: number
  @Input() answerID: number

  questionForm: FormGroup

  loading: boolean = false //Indica se o botão de login foi pressionado e a página está buscando informações do banco

  //Construtor
  constructor(
    private formBuilder: FormBuilder,
    private questionsService: QuestionsService,
    private answerService: AnswerService,
    private router: Router
  ) {}

  //Métodos
  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required])
    })
  }

  async createComment() {
    this.loading = true
    console.log(this.questionForm.value);
    if(this.questionID === undefined) {
      this.createAnswerComment()
    } else {
      this.createQuestionComment()
    }
    
    this.loading = false
  }

  async createQuestionComment() {
    const response: Question = await this.questionsService.createComment(this.questionID, this.questionForm.value.content)
    console.log(response)
    this.router.navigate([`/questions/${this.questionID}`])
  }

  async createAnswerComment() {
    const response: Answer = await this.answerService.createComment(this.questionID, this.questionForm.value.content)
    console.log(response)
  }
}
