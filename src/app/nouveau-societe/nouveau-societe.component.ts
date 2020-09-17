import { Component, OnInit } from '@angular/core';
import { SocietesService } from "../services/societes.service";
import { Router } from '@angular/router';
import { Societe } from "../model/societe.model";

@Component({
  selector: 'app-nouveau-societe',
  templateUrl: './nouveau-societe.component.html',
  styleUrls: ['./nouveau-societe.component.css']
})
export class NouveauSocieteComponent implements OnInit {
  public currentSociete: Societe;
  public mode: number=1;

  constructor(private societeservice: SocietesService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveSociete(data :any){
     this.societeservice.addSociete(this.societeservice.host+"/societes",data)
     .subscribe(res=>{

       this.currentSociete= res;
      // this.mode=2;
       this.router.navigateByUrl("/societe");
     },err=>{
       console.log(err);
     })
  }

  onNewSocietes(){
    this.mode = 1;
  }

}
