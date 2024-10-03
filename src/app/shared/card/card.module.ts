import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [CardComponent],
  imports: [CardModule, CommonModule],
  exports: [CardComponent],
})
export class BasicCardModule {}
