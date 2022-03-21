import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Response } from './response.component';

const routes: Routes = [
  {
    path: '',
    component: Response
  }
];

@NgModule({
  declarations: [Response],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule
  ],
  exports: [Response]
})
export class ResponseModule { }