import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionGameComponent } from './pages/question-game/question-game.component';
import { QuestionInfoComponent } from './pages/question-game/question-info/question-info.component';
import { QuestionStatusComponent } from './pages/question-game/question-status/question-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  QuestionInteractiveContentComponent,
} from './pages/question-game/question-interactive-content/question-interactive-content.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  declarations: [
    QuestionGameComponent,
    QuestionInteractiveContentComponent,
    QuestionInfoComponent,
    QuestionStatusComponent,
  ]
})
export class UserModule { }
