import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorListRoutingModule } from './monitor-list-routing.module';
import { MonitorListComponent } from '../monitor-list.component';


@NgModule({
  declarations: [
    MonitorListComponent
  ],
  imports: [
    CommonModule,
    MonitorListRoutingModule
  ]
})
export class MonitorListModule { }
