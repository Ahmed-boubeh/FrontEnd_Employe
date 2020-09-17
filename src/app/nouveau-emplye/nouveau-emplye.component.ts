import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from "../services/employe.service";
import { SocietesService } from "../services/societes.service";

@Component({
  selector: 'app-nouveau-emplye',
  templateUrl: './nouveau-emplye.component.html',
  styleUrls: ['./nouveau-emplye.component.css']
})
export class NouveauEmplyeComponent implements OnInit {

  public societes: any;

  constructor(private societeservice: SocietesService,private employeservice: EmployeService, private router: Router) { }

  ngOnInit(): void {
    this.societeservice.getSocietes()
      .subscribe(data => {
        this.societes = data;
      }, err => {
        console.log(err);
      })
  }

  onSaveEmploye(data: any) {
    console.log(data);
   this.employeservice.addEmploye(data)
      .subscribe(res => {

      }, err => {
        console.log(err);
      })
    this.router.navigateByUrl("/employe");
  }

}
