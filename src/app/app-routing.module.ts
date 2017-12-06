import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ThoughtcloudComponent } from './thoughtcloud/thoughtcloud.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';

import { ThoughtsService } from './userhistory/thoughts.service';


const routes: Routes = [

	{
		path:'',
		component: HomeComponent
	},

	{
		path:'about',
		component: AboutComponent
	},

	{
		path:'thoughtcloud',
		component: ThoughtcloudComponent
	},
	{
		path:'login',
		component: UserhistoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
