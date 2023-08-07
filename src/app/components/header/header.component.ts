import {Component} from '@angular/core';
import {PageItem} from "./page-item";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public pages: PageItem[];

	constructor() {
		this.pages = [
			{title: 'Assignment one', route: 'assignment-one'},
			{title: 'Assignment two', route: 'assignment-two'},
			{title: 'Assignment three', route: 'assignment-three/123'},
			{title: 'Assignment four', route: 'assignment-four'}
		];
	}
}
