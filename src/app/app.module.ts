import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AssignmentOneComponent} from './pages/assignment-one/assignment-one.component';
import {AssignmentTwoComponent} from './pages/assignment-two/assignment-two.component';
import {HeaderComponent} from './components/header/header.component';
import {FooComponent} from './pages/assignment-two/foo/foo.component';
import {AssignmentThreeComponent} from './pages/assignment-three/assignment-three.component';
import {AssignmentFourComponent} from './pages/assignment-four/assignment-four.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		AssignmentOneComponent,
		AssignmentTwoComponent,
		HeaderComponent,
		FooComponent,
		AssignmentThreeComponent,
		AssignmentFourComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
