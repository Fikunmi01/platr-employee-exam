import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-assignment-three',
	templateUrl: './assignment-three.component.html',
	styleUrls: ['./assignment-three.component.scss'],
})
export class AssignmentThreeComponent implements OnInit {
	userId: string = ''; // stores the user id from path variable
	queryParams: { key: string; value: string }[] = []; // stores query parameters
	
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		// Retrieve path variable (userId)
		this.route.params.subscribe((params) => {
			this.userId = params['userId'];
		});

		// Retrieve query parameters
		this.route.queryParams.subscribe((queryParams) => {
			for (const key in queryParams) {
				if (queryParams.hasOwnProperty(key)) {
					this.queryParams.push({ key, value: queryParams[key] });
				}
			}
		});
	}
}
