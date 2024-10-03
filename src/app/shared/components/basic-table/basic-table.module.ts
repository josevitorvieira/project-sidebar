import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [BasicTableComponent],
  imports: [CommonModule, TableModule, ButtonModule, RippleModule],
  exports: [BasicTableComponent],
})
export class BasicTableModule {}
