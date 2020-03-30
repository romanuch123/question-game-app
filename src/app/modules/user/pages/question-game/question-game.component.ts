import { Component, OnInit } from '@angular/core';
import { QuestionGameService } from 'src/app/core/services/questionGame.service';
import { IQuestion } from 'src/app/core/interfaces/question';
import {  FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-question-game',
  templateUrl: './question-game.component.html',
  styleUrls: ['./question-game.component.scss']
})
export class QuestionGameComponent implements OnInit {
  questions: IQuestion[] = [];
  answersDataForm: FormGroup;
  constructor(
    public questionGameService: QuestionGameService,
  ) { }

  ngOnInit(): void {
    this.questions = this.questionGameService.getQuestions();
    console.log(this.questions);
    this.answersDataForm = new FormGroup({
      answer: new FormControl('', Validators.required),
    });
  }
  // setAnswer(questionId: string): void {
  //   if (this.answersDataForm.valid) {
  //     const answerId: string = this.answersDataForm.value.answer;
  //     this.questionGameService.setAnswer(questionId, answerId);
  //   } else {
  //     alert('Choose answer, please!');
  //   }
  // }
  // nextQuestion() {
  //   this.questionGameService.nextQuestion();
  // }
}
