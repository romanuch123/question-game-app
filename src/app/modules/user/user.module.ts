import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionGameComponent } from './pages/question-game/question-game.component';
// import { QuestionContentComponent } from './pages/question-game/question-content/question-content.component';
import { QuestionInfoComponent } from './pages/question-game/question-info/question-info.component';
import { QuestionStatusComponent } from './pages/question-game/question-status/question-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    QuestionGameComponent,
    // QuestionContentComponent,
    QuestionInfoComponent,
    QuestionStatusComponent,
  ]
})
export class UserModule { }
