import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMonitorRoutingModule } from './add-monitor-routing.module';
import { AddMonitorComponent } from '../add-monitor.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
//import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddMonitorComponent,
  ],
  imports: [
    CommonModule,
    AddMonitorRoutingModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    // MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    // HttpClientModule
    MatButtonModule
  ]
})
export class AddMonitorModule { }
