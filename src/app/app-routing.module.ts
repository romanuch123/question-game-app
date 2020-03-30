import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRouteLoaderComponent } from './core/components/nested-route-loader/nested-route-loader.component';
import { QuestionGameComponent } from './modules/user/pages/question-game/question-game.component';

const routes: Routes = [
  {
    path: '',
    component: NestedRouteLoaderComponent,
    children: [
      {
        path: '',
        component: QuestionGameComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
