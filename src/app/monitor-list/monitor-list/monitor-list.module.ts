import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorListRoutingModule } from './monitor-list-routing.module';
import { MonitorListComponent } from '../monitor-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    MonitorListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MonitorListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatIconModule
  ]
})
export class MonitorListModule { }
