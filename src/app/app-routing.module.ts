import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleMatTableTaskComponent } from './multiple-mat-table-task/multiple-mat-table-task.component';

const routes: Routes = [
  {
		path: '',
		redirectTo: 'table',
		pathMatch: 'full',
	  },
  {
		path: 'table',
		component: MultipleMatTableTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
