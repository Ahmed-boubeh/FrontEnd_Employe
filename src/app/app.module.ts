import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocieteComponent } from './societe/societe.component';
import { EmployeComponent } from './employe/employe.component';
import { NouveauSocieteComponent } from './nouveau-societe/nouveau-societe.component';
import { FormsModule } from '@angular/forms';
import { EditsocieteComponent } from './editsociete/editsociete.component';
import { NouveauEmplyeComponent } from './nouveau-emplye/nouveau-emplye.component';
import { EditEmplyeComponent } from './edit-emplye/edit-emplye.component';

@NgModule({
  declarations: [
    AppComponent,
    SocieteComponent,
    EmployeComponent,
    NouveauSocieteComponent,
    EditsocieteComponent,
    NouveauEmplyeComponent,
    EditEmplyeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
