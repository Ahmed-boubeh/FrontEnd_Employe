import { SocietesService } from "../services/societes.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  public societes:any;
  public employes:any;
  public mode:number=1;
  public nom:string;

  constructor(private societeservice: SocietesService,private router:Router) { }

  ngOnInit(){
    this.societeservice.getSocietes()
      .subscribe(data => {
        this.societes = data;
      }, err => {
        console.log(err);
      })
  }


  allsociete(){
    this.mode = 1;
  }

  onGetSocietes(){
    this.societeservice.getSocietes()
    .subscribe(data=>{
      this.societes=data;
    },err=>{
      console.log(err);
    })

  }


  onChercher(form : any){
    this.societeservice.getSocieteByNom(form.keyword)
      .subscribe(data => {
        this.societes = data;
      }, err => {
        console.log(err);
      })
  }


  onDeleteSociete(p,nom){
    let conf = confirm("Etes vous sure " + nom +"?");
    if(conf){
      this.societeservice.DeleteSociete(p)
        .subscribe(data => {
          this.onGetSocietes();
        }, err => {
          console.log(err);
        })
    }
  }

  EmployeSociete(p: number,nome: string) {
    this.societeservice.getEmployeSociete(p)
      .subscribe(data => {
        this.employes = data;
        this.nom = nome;
        console.log(data);
        this.mode=2;
      }, err => {
        console.log(err);
      })
  }


  onEditSociete(p: any){
    this.router.navigateByUrl("/edit-societe/"+p.id);
  }

}
