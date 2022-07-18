import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMonitorRoutingModule } from './add-monitor-routing.module';
import { AddMonitorComponent } from '../add-monitor.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AddMonitorComponent,
  ],
  imports: [
    CommonModule,
    AddMonitorRoutingModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class AddMonitorModule { }
