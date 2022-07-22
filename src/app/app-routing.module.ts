import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-monitor', loadChildren: () => import('./add-monitor/add-monitor/add-monitor.module').then(x => x.AddMonitorModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports/reports.module').then(x => x.ReportsModule) },
  { path: 'home', loadChildren: () => import('./home/home/home.module').then(x => x.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
