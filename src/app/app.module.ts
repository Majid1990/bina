import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterComponent } from './add-monitor/monitor-type/router/router.component';
// import { WebsiteComponent } from './add-monitor/monitor-type/website/website.component';
// import { DatabaseComponent } from './add-monitor/monitor-type/database/database.component';
// import { MonitorLogComponent } from './add-monitor/monitor-type/monitor-log/monitor-log.component';
// import { TempratureComponent } from './add-monitor/monitor-type/temprature/temprature.component';
// import { SwitchComponent } from './add-monitor/monitor-type/switch/switch.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutUsComponent,
    // LogReportComponent,
    // SensorReportComponent,
    // WebsiteReportComponent,
    // RouterComponent,
    // WebsiteComponent,
    // DatabaseComponent,
    // MonitorLogComponent,
    // TempratureComponent,
    // SwitchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ReactiveFormsModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
