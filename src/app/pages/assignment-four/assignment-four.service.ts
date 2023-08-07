import { Injectable } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Injectable({
	providedIn: 'root',
})
export class AssignmentFourService {
	private employees: Employee[];

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
				employee.notes =
					employee.notes.charAt(0).toUpperCase() +
					employee.notes.slice(1);
			}
		});
	}

	// Get
	get Employees(): Employee[] {
		return this.employees;
	}
	// Add
	addNew(data: any) {
		this.employees.push(data);
	}
	// Delete
	deleteData(id: number) {
		const index = this.employees.findIndex(
			(employee) => employee.id === id
		);
		if (index !== -1) {
			this.employees.splice(index, 1);

			// Reassign IDs 
			for (let i = index; i < this.employees.length; i++) {
				this.employees[i].id = i + 1;
			}
		}
	}
}
