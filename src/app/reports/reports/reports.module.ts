import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from '../reports.component';
import { LogReportComponent } from '../log-report/log-report.component';
import { SensorReportComponent } from '../sensor-report/sensor-report.component';
import { WebsiteReportComponent } from '../website-report/website-report.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ReportsComponent,
    LogReportComponent,
    SensorReportComponent,
    WebsiteReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatTableModule
  ]
})
export class ReportsModule { }
