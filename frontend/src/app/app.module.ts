import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPessoasComponent } from './components/add-pessoas/add-pessoas.component';
import { EditPessoasComponent } from './components/edit-pessoas/edit-pessoas.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { PessoaService } from './service/pessoa.service';


@NgModule({
  declarations: [
    AppComponent,
    AddPessoasComponent,
    EditPessoasComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
