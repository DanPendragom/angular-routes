
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesPaginas } from './paginas/paginas-routing-module';

export const myRoutes = [
    { path: 'index', pathMatch: 'full', redirectTo: 'localhost:4200' },
    ...RoutesPaginas,
    
    
]
/*
    Criação do modulo para gerenciar as rotas da aplicação angular
*/
@NgModule({
  imports: [
    RouterModule.forRoot(myRoutes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }