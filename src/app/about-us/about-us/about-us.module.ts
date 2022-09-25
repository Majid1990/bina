import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from '../about-us.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AboutUsModule { }
