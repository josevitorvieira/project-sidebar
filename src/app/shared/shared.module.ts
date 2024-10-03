import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSidebarModule } from './components/sidebar/sidebar.module';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';
import { BasicCardModule } from './components/card/card.module';
import { BasicTableModule } from './components/basic-table/basic-table.module';

@NgModule({
  imports: [
    CommonModule,
    BasicSidebarModule,
    BasicCardModule,
    BasicTableModule,
    DynamicFormModule,
  ],
  exports: [
    BasicSidebarModule,
    BasicCardModule,
    BasicTableModule,
    DynamicFormModule,
  ],
})
export class SharedModule {}
