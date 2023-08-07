import { Component, Input, OnInit } from '@angular/core';
import { AssignmentFourService } from './assignment-four.service';
import { Employee } from 'src/app/interfaces/employee';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';

@Component({
	selector: 'app-assignment-four',
	templateUrl: './assignment-four.component.html',
	styleUrls: ['./assignment-four.component.scss'],
})
export class AssignmentFourComponent implements OnInit {
	constructor(private dataService: AssignmentFourService) {
		this.form = new FormGroup({
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			dob: new FormControl('', [Validators.required]),
			roles: new FormControl('', [Validators.required]),
			notes: new FormControl(''),
		});
		console.log(this.form);
	}

	employees: Employee[] = [];

	form!: any;

	ngOnInit(): void {
		// Access the employees array from the service
		this.employees = this.dataService.Employees;
	}

	addNewData() {
		if (this.form.valid) {
			const newEmployee = {
				id: this.generateNewId(),
				firstName: this.form.value.firstName,
				lastName: this.form.value.lastName,
				dob: this.form.value.dob,
				role: this.form.value.roles,
				notes: this.form.value.notes,
			};
			this.dataService.addNew(newEmployee);
			console.log('New employee added');

			// Clear the form after submission
			this.form.reset();
		}
	}

	deleteItem(i: number) {
		this.dataService.deleteData(this.employees[i].id);
	}

	private generateNewId(): number {
		const maxId = this.employees.reduce(
			(max, employee) => Math.max(max, employee.id),
			0
		);
		return maxId + 1;
	}
}
