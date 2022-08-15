import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-monitor', loadChildren: () => import('./add-monitor/add-monitor/add-monitor.module').then(x => x.AddMonitorModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports/reports.module').then(x => x.ReportsModule) },
  { path: 'home', loadChildren: () => import('./home/home/home.module').then(x => x.HomeModule) },
  { path: 'monitorList', loadChildren: () => import('./monitor-list/monitor-list/monitor-list.module').then(x => x.MonitorListModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us/about-us.module').then(x => x.AboutUsModule) },

  { path: '', loadChildren: () => import('./home/home/home.module').then(x => x.HomeModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
