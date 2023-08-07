import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOneComponent } from './pages/assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './pages/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './pages/assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './pages/assignment-four/assignment-four.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'assignment-one' },
	{
		path: 'assignment-one',
		pathMatch: 'full',
		component: AssignmentOneComponent,
		data: { title: 'Assignment One' },
	},
	{
		path: 'assignment-two',
		pathMatch: 'full',
		component: AssignmentTwoComponent,
		data: { title: 'Assignment Two' },
	},
	{
		path: 'assignment-three/:userId',
		pathMatch: 'full',
		component: AssignmentThreeComponent,
		data: { title: 'Assignment Three' },
	},
	{
		path: 'assignment-four',
		pathMatch: 'full',
		component: AssignmentFourComponent,
		data: { title: 'Assignment Four' },
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'assignment-one' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
