import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "../../models/employee";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [EmployeeService],
})
export class ConsultasComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
      console.log(this.employeeService.employees)
    });
  }

  irMapa(employee: Employee){
    // Para almacenar un objeto hay que pasarlo a json
    // En otro caso solo admite string
    localStorage.setItem("employee", JSON.stringify(employee))
    this.router.navigate(['/mapa']);
  }

}
