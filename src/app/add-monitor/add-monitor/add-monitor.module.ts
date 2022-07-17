import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMonitorRoutingModule } from './add-monitor-routing.module';
import { AddMonitorComponent } from '../add-monitor.component';


@NgModule({
  declarations: [
    AddMonitorComponent,
  ],
  imports: [
    CommonModule,
    AddMonitorRoutingModule

  ]
})
export class AddMonitorModule { }
