import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Societe } from '../model/societe.model';
import { SocietesService } from "../services/societes.service";

@Component({
  selector: 'app-editsociete',
  templateUrl: './editsociete.component.html',
  styleUrls: ['./editsociete.component.css']
})
export class EditsocieteComponent implements OnInit {
  public currentSociete:Societe;
  private p :number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private societeservice: SocietesService) { }

  ngOnInit() {
    this.p = this.activatedRoute.snapshot.params.id;
    this.societeservice.getSocieteedit(this.p)
      .subscribe(data => {
        this.currentSociete = data;
      }, err => {
        console.log(err);
      })
  }


  onEditSociete(data :any){
    this.societeservice.editSociete(this.p,data)
      .subscribe(data => {
        alert("Mise a jour effectué avec succes");
        if(alert){
          this.router.navigateByUrl("/societe");
        }
      }, err => {
        console.log(err);
      })
  }

}
