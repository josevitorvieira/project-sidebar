import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TSidebarModule } from './components/sidebar/sidebar.module';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';
import { BasicCardModule } from './card/card.module';
import { BasicTableModule } from './components/basic-table/basic-table.module';

@NgModule({
  imports: [
    CommonModule,
    TSidebarModule,
    BasicCardModule,
    BasicTableModule,
    DynamicFormModule,
  ],
  exports: [
    TSidebarModule,
    BasicCardModule,
    BasicTableModule,
    DynamicFormModule,
  ],
})
export class SharedModule {}
