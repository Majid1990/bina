import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMonitorComponent } from '../add-monitor.component';

const routes: Routes = [
  { path: '', component: AddMonitorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMonitorRoutingModule { }
