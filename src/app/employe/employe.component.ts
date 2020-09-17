import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from "../services/employe.service";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  public societes: any;
  public employes: any;
  public mode: number = 1;
  public nom: string;

  constructor(private employeservice: EmployeService, private router: Router) { }

  ngOnInit() {
    this.employeservice.getEmployes()
      .subscribe(data => {
        this.employes = data;
      }, err => {
        console.log(err);
      })
  }

  onGetEmployes(){
    this.employeservice.getEmployes()
      .subscribe(data => {
        this.employes = data;
      }, err => {
        console.log(err);
      })
  }

  onChercherEmp(form: any) {
    this.employeservice.getEmployesByNom(form.keyword)
      .subscribe(data => {
        this.employes = data;
      }, err => {
        console.log(err);
      })
  }


  onDeleteEmp(p, nom) {
    let conf = confirm("Etes vous sure " + nom + "?");
    if (conf) {
      this.employeservice.DeleteEmploye(p)
        .subscribe(data => {
          this.onGetEmployes();
        }, err => {
          console.log(err);
        })
    }
  }

  onEditEmploye(p: any) {
    this.router.navigateByUrl("/edit-employe/" + p.id);
  }

}
