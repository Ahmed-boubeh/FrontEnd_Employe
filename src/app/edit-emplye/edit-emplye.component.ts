import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../model/employe.model';
import { EmployeService } from "../services/employe.service";

@Component({
  selector: 'app-edit-emplye',
  templateUrl: './edit-emplye.component.html',
  styleUrls: ['./edit-emplye.component.css']
})
export class EditEmplyeComponent implements OnInit {

  public currentEmploye: Employe;
  private p: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeservice: EmployeService) { }

  ngOnInit() {
    this.p = this.activatedRoute.snapshot.params.id;
    this.employeservice.getEmployeedit(this.p)
      .subscribe(data => {
        this.currentEmploye = data;
        console.log(this.p);
      }, err => {
        console.log(err);
      })
  }


  onEditEmploye(data: any) {
    this.employeservice.editEmploye(this.p, data)
      .subscribe(data => {
        alert("Mise a jour effectué avec succes");
        if (alert) {
          this.router.navigateByUrl("/employe");
        }
      }, err => {
        console.log(err);
      })
  }

}
