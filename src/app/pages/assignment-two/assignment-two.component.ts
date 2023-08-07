import { Component, Output, ViewChild } from '@angular/core';
import { FooComponent } from './foo/foo.component';

@Component({
	selector: 'app-assignment-two',
	templateUrl: './assignment-two.component.html',
	styleUrls: ['./assignment-two.component.scss'],
})
export class AssignmentTwoComponent {
	selectedColor: string = '#fff';
  tempColor:string='#fff'
	childData(event: any) {
		this.selectedColor = event;
		console.log(event);
	}
}
