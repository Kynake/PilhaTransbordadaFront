import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { QuestionsService } from '../../question/questions.service';
import { Question } from '../../question/question.model';
import { User } from '../../user/user.model';
import { APIResponse } from '../../db.model';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  //Atributos
  @Input() questionID: number

  questionForm: FormGroup

  loading: boolean = false //Indica se o botão de login foi pressionado e a página está buscando informações do banco

  //Construtor
  constructor(
    private formBuilder: FormBuilder,
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  //Métodos
  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required])
    })
  }

  async createAnswer() {
    this.loading = true
    console.log(this.questionForm.value);

    const response: Question = await this.questionsService.createAnswer(this.questionID, this.questionForm.value.content)
    console.log(response)
    this.router.navigate([`/questions/${this.questionID}`])

    this.loading = false
  }

}
