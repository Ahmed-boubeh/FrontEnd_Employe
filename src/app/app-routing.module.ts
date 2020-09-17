import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmplyeComponent } from './edit-emplye/edit-emplye.component';
import { EditsocieteComponent } from './editsociete/editsociete.component';
import { EmployeComponent } from './employe/employe.component';
import { NouveauEmplyeComponent } from './nouveau-emplye/nouveau-emplye.component';
import { NouveauSocieteComponent } from './nouveau-societe/nouveau-societe.component';
import { SocieteComponent } from './societe/societe.component';

const routes: Routes = [
  {
    path: '', redirectTo:"/societe",pathMatch:'full'
  },
  {
    path: 'societe', component: SocieteComponent
  },
  {
    path: 'new-societe', component:NouveauSocieteComponent
  },
  {
    path: 'employe', component: EmployeComponent
  },
  {
    path: 'edit-societe/:id', component: EditsocieteComponent
  },
  {
    path: 'new-employe', component: NouveauEmplyeComponent
  },
  {
    path: 'edit-employe/:id', component: EditEmplyeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
