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
import { DatabaseComponent } from '../monitor-type/database/database.component';
import { MonitorLogComponent } from '../monitor-type/monitor-log/monitor-log.component';
import { RouterComponent } from '../monitor-type/router/router.component';
import { WebsiteComponent } from '../monitor-type/website/website.component';
import { TempratureComponent } from '../monitor-type/temprature/temprature.component';
import { SwitchComponent } from '../monitor-type/switch/switch.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { IpDirective } from 'src/app/ip.directive';
// import { IpDirective } from '../ip.directive';
import { IpDirective } from '../../ip.directive'

@NgModule({
  declarations: [
    AddMonitorComponent,
    DatabaseComponent,
    MonitorLogComponent,
    RouterComponent,
    WebsiteComponent,
    TempratureComponent,
    SwitchComponent,
    IpDirective

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
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AddMonitorModule { }
