import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../model/societe.model';


@Injectable({
  providedIn: 'root'
})
export class SocietesService {

  public host: string ="http://localhost:1010";

  constructor(private httpclient:HttpClient) { }


  //Societes
 public getSocietes(){
   return this.httpclient.get(this.host+"/findAllSociete")
 }

  public getSocieteByNom(nom: string) {
    return this.httpclient.get(this.host +"/searchSocByName/"+nom);
  }

  public DeleteSociete(key: number) {
    return this.httpclient.get(this.host + "/deleteSociete/" + key);
  }

  public addSociete(url,data):Observable<Societe>{
    return this.httpclient.post<any>(url,data);
  }


  public getEmployeSociete(p: number) {
    return this.httpclient.get(this.host +"/societes/"+p+"/employes");
  }

  public getSocieteedit(p: number): Observable<Societe> {
    return this.httpclient.get<any>(this.host + "/findAllSociete/"+p);
  }

  public editSociete(p: number,data){
    return this.httpclient.put(this.host +"/editsociete/" + p,data);
  }



}
