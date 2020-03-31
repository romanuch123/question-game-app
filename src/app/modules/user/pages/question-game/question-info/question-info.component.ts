import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from 'src/app/core/interfaces/question';
import {  FormControl, FormGroup, Validators  } from '@angular/forms';
import { QuestionGameService } from 'src/app/core/services/questionGame.service';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss']
})
export class QuestionInfoComponent implements OnInit {
  @Input() question: IQuestion;

  answersDataForm: FormGroup;
  constructor(
    private questionGameService: QuestionGameService,
  ) { }

  ngOnInit(): void {
    this.answersDataForm = new FormGroup({
      answer: new FormControl('', Validators.required),
    });
  }
  answerChanged(): void {
    const answerId: string = this.answersDataForm.value.answer;
    this.questionGameService.setCurrentAnswerId(answerId);
  }
}
