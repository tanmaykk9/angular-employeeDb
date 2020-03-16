import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EMPLOYEES} from '../employeeDB';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedEmployee: Employee;
  employees = EMPLOYEES; 

  onSelect(employees: Employee): void {
    debugger
    this.selectedEmployee = employees;
  }

  constructor() { }

  ngOnInit() {
  }

}