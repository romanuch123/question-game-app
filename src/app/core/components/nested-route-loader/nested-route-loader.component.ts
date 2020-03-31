import { Component, OnInit } from '@angular/core';
import { QuestionGameService } from '../../services/questionGame.service';

@Component({
  selector: 'app-nested-route-loader',
  templateUrl: './nested-route-loader.component.html',
  styleUrls: ['./nested-route-loader.component.scss']
})
export class NestedRouteLoaderComponent implements OnInit {
  open: boolean = false;
  constructor(
    public questionGameService: QuestionGameService,
  ) { }

  ngOnInit() {
  }
  changeQuestion(id: string): void {
    this.questionGameService.setCurrentQuestionId(id);
    this.open = false;
  }
}
