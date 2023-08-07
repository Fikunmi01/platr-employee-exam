import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
	selector: 'app-assignment-one',
	templateUrl: './assignment-one.component.html',
	styleUrls: ['./assignment-one.component.scss'],
})
export class AssignmentOneComponent {
	public readonly employees: Employee[];

	constructor() {
		this.employees = [
			{
				id: 1,
				firstName: 'david',
				lastName: 'brown',
				dob: '1990-01-01',
				role: 'analyst',
			},
			{
				id: 2,
				firstName: 'emily',
				lastName: 'brown',
				dob: '1990-01-01',
				role: 'designer',
				notes: 'attention to detail',
			},
			{
				id: 3,
				firstName: 'emily',
				lastName: 'johnson',
				dob: '1990-01-01',
				role: 'designer',
			},
			{
				id: 4,
				firstName: 'john',
				lastName: 'smith',
				dob: '1990-01-01',
				role: 'engineer',
				notes: 'attention to detail',
			},
			{
				id: 5,
				firstName: 'alice',
				lastName: 'johnson',
				dob: '1990-01-01',
				role: 'engineer',
			},
			{
				id: 6,
				firstName: 'emily',
				lastName: 'williams',
				dob: '1990-01-01',
				role: 'n/a',
			},
			{
				id: 7,
				firstName: 'michael',
				lastName: 'jones',
				dob: '1990-01-01',
				role: 'analyst',
				notes: 'creative thinker',
			},
			{
				id: 8,
				firstName: 'alice',
				lastName: 'johnson',
				dob: '1990-01-01',
				role: 'n/a',
			},
			{
				id: 9,
				firstName: 'david',
				lastName: 'williams',
				dob: '1990-01-01',
				role: 'engineer',
				notes: 'creative thinker',
			},
			{
				id: 10,
				firstName: 'alice',
				lastName: 'smith',
				dob: '1990-01-01',
				role: 'developer',
				notes: 'excellent problem solver',
			},
			{
				id: 11,
				firstName: 'david',
				lastName: 'jones',
				dob: '1990-01-01',
				role: 'engineer',
			},
			{
				id: 12,
				firstName: 'emily',
				lastName: 'johnson',
				dob: '1990-01-01',
				role: 'developer',
				notes: 'excellent problem solver',
			},
			{
				id: 13,
				firstName: 'michael',
				lastName: 'williams',
				dob: '1990-01-01',
				role: 'n/a',
			},
			{
				id: 14,
				firstName: 'michael',
				lastName: 'jones',
				dob: '1990-01-01',
				role: 'engineer',
			},
			{
				id: 15,
				firstName: 'alice',
				lastName: 'jones',
				dob: '1990-01-01',
				role: 'designer',
			},
		];
		this.employees.forEach((employee) => {
			employee.firstName =
				employee.firstName.charAt(0).toUpperCase() +
				employee.firstName.slice(1);
			employee.lastName =
				employee.lastName.charAt(0).toUpperCase() +
				employee.lastName.slice(1);
			if (employee.role !== 'n/a') {
				employee.role =
					employee.role.charAt(0).toUpperCase() +
					employee.role.slice(1);
			}
			if (employee.notes) {
				employee.notes = employee.notes.charAt(0).toUpperCase() + employee.notes.slice(1);
			  }
		});
	}
}
