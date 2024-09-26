import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TSidebarModule } from './components/sidebar/sidebar.module';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';


@NgModule({
  imports: [
    CommonModule,
    TSidebarModule,
    DynamicFormModule
  ],
  exports: [TSidebarModule, DynamicFormModule]
})
export class SharedModule { }
