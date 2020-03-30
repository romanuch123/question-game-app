import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IQuestion } from 'src/app/core/interfaces/question';

@Component({
  selector: 'app-question-status',
  templateUrl: './question-status.component.html',
  styleUrls: ['./question-status.component.scss']
})
export class QuestionStatusComponent implements OnInit, OnChanges {
  @Input() status: boolean;
  @Input() isAnswerRight: boolean;

  questionStatusClasses = null;
  constructor() { }

  ngOnInit(): void {
    // this.questionStatusClasses = {
    //   success: this.question.status && this.question.rightAnswerId === this.question.userAnswerId,
    //   wrong: this.question.status && this.question.rightAnswerId !== this.question.userAnswerId,
    // };
  }
  ngOnChanges(changes: SimpleChanges): void {
    // const isChanges: boolean = (changes.question.currentValue !== changes.question.previousValue);
    // console.log('work');
    // if (true) {
      // const newQuestion: IQuestion = changes.question.currentValue;
      // console.log(newQuestion);
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        console.log(propName);
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        // this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        this.questionStatusClasses = {
          success: this.status && this.isAnswerRight,
          wrong: this.status && !this.isAnswerRight,
        };
      }
    }
  }

}
