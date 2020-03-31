import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionGameService } from '../../services/questionGame.service';

@Component({
  selector: 'app-nested-route-loader',
  templateUrl: './nested-route-loader.component.html',
  styleUrls: ['./nested-route-loader.component.scss']
})
export class NestedRouteLoaderComponent implements OnInit {
  @ViewChild('menuButton') menuButton: ElementRef;

  open: boolean = false;
  constructor(
    public questionGameService: QuestionGameService,
  ) { }

  ngOnInit(): void {
  }
  changeQuestion(id: string): void {
    this.questionGameService.setCurrentQuestionId(id);
    this.open = false;
  }
  hideMenu(event: Element): void {
    if (event !== this.menuButton.nativeElement && event !== this.menuButton.nativeElement.children[0]) {
      this.open = false;
    }
  }
}
