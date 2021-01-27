import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

const routes: Routes = [{path: '', component: PagrindinisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
