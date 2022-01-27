import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCaseComponent } from './test-case/test-case.component';
import {TestManagementRouting} from "./test-management.routing";



@NgModule({
  declarations: [
    TestCaseComponent
  ],
  imports: [
    CommonModule,
    TestManagementRouting
  ]
})
export class TestManagementModule { }
