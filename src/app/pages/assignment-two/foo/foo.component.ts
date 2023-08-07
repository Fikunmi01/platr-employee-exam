import { style } from '@angular/animations';
import {
	Component,
	ChangeDetectorRef,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-foo',
	templateUrl: './foo.component.html',
	styleUrls: ['./foo.component.scss'],
})
export class FooComponent {
	selectedColor: string = '#fff'; // Default text color
	temporaryColor: string = '#fff'; // Temporary text color before confirmation
	emittedMessage: string = 'We go again';

	@Output() myData = new EventEmitter<string>();

	public readonly colors: string[];

	constructor() {
		this.colors = ['#ffffff', '#656565', '#eb2188', '#7c8ad9'];
	}
	onColorSelect(event: any) {
		this.temporaryColor = event.target.value; // Update temporary text color immediately
	}

	textChange() {
		this.selectedColor = this.temporaryColor; // Apply the temporary text color
		this.myData.emit(this.selectedColor);
		// console.log('Button clicked');
	}
}
