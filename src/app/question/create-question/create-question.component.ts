import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Question } from '../question.model';
import { User } from '../../user/user.model';
import { APIResponse } from '../../db.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  //Atributos
  questionForm: FormGroup

  loading: boolean = false //Indica se o botão de login foi pressionado e a página está buscando informações do banco

  //Construtor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  //Métodos
  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title:   this.formBuilder.control('', [Validators.required]),
      content: this.formBuilder.control('', [Validators.required])
    })
  }

  async createQuestion() {
    this.loading = true
    console.log(this.questionForm.value);

    const question = {title: this.questionForm.value.title, content: this.questionForm.value.content}

    const response: Question = await this.questionsService.createQuestion(question)
    console.log(response)
    this.router.navigate([`/questions/${response.id}`])

    this.loading = false
  }

}
