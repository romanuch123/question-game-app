import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedRouteLoaderComponent } from './components/nested-route-loader/nested-route-loader.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    NestedRouteLoaderComponent,
  ]
})
export class CoreModule { }
