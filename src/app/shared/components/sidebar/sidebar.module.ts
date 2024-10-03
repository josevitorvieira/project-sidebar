import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, ButtonModule, BrowserModule, BrowserAnimationsModule],
  exports: [SidebarComponent],
})
export class TSidebarModule {}
