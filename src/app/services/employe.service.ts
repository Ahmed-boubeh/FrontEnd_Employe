import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  public host: string = "http://localhost:1010";

  constructor(private httpclient: HttpClient) { }



  public getEmployes() {
    return this.httpclient.get(this.host + "/findAllEmploye")
  }

  public getEmployesByNom(nom: string) {
    return this.httpclient.get(this.host+"/searchEmpByName/"+nom);
  }


  public DeleteEmploye(key: number) {
    return this.httpclient.get(this.host + "/deleteEmp/" + key);
  }

  public addEmploye(data){
    return this.httpclient.post(this.host + "/addEmp",data);
  }


  public getEmployeSociete(p: number) {
    return this.httpclient.get(this.host + "/societes/" + p + "/employes");
  }

  public getEmployeedit(p: number): Observable<Employe> {
    return this.httpclient.get<any>(this.host + "/findAllEmploye/" + p);
  }

  public editEmploye(p: number, data) {
    return this.httpclient.put(this.host + "/edit/" + p, data);
  }


}
