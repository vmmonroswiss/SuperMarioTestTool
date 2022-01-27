
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCaseComponent} from "./test-case/test-case.component";



const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'test'
      },
      {
        path: 'test',
        component: TestCaseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TestManagementRouting {}
