import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailModule } from './employee-detail/employee-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EmployeeDetailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
