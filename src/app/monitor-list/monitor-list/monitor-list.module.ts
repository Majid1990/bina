import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorListRoutingModule } from './monitor-list-routing.module';
import { MonitorListComponent } from '../monitor-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    MonitorListComponent
  ],
  imports: [
    CommonModule,
    MonitorListRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MonitorListModule { }
