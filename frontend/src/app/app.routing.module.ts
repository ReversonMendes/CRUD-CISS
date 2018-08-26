import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { AddPessoasComponent } from './components/add-pessoas/add-pessoas.component';
import { EditPessoasComponent } from './components/edit-pessoas/edit-pessoas.component';

const routes: Routes = [
    { path: 'pessoas', redirectTo: '/pessoas' },
    { path: 'incluir', redirectTo: '/incluir' },
    { path: 'editar/:id', redirectTo: '/editar/:id' },
    { path: 'pessoas', component: PessoasComponent },
    { path: 'incluir', component: AddPessoasComponent },
    { path: 'editar/:id', component: EditPessoasComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }