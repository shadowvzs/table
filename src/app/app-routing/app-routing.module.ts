import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../table/table.component'
import { HomeComponent } from '../home/home.component'
import { SecretComponent } from '../secret/secret.component'
import { TableParentComponent } from '../table-parent/table-parent.component';

var routes: Routes = [
    {
        path: 'table',
        component: TableParentComponent,
    },
    {
        path: 'secret',
        component: SecretComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
