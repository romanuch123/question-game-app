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
  player: YT.Player;
  playerVars = {
    autoplay: 1,
    controls: 0,
    loop: 1,
  };
  answersDataForm: FormGroup;
  constructor(
    public questionGameService: QuestionGameService,
  ) { }

  ngOnInit(): void {
    this.answersDataForm = new FormGroup({
      answer: new FormControl('', Validators.required),
    });
  }
  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {
  }
}
