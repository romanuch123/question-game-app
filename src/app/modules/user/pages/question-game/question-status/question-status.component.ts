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
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        this.questionStatusClasses = {
          success: this.status && this.isAnswerRight,
          wrong: this.status && !this.isAnswerRight,
        };
      }
    }
  }

}
