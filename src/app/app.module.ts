import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { AboutUsComponent } from './about-us/about-us.component';
import { IpYpeDirective } from './ip-ype.directive';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './monitor-list/dialog/dialog.component';


import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
// import { DatabaseComponent } from '../monitor-type/database/database.component';
// import { MonitorLogComponent } from '../monitor-type/monitor-log/monitor-log.component';
// import { RouterComponent } from '../monitor-type/router/router.component';
// import { WebsiteComponent } from '../monitor-type/website/website.component';
// import { TempratureComponent } from '../monitor-type/temprature/temprature.component';
// import { SwitchComponent } from '../monitor-type/switch/switch.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    //AboutUsComponent,
    IpYpeDirective,
    RightSidebarComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    // HttpClientModule
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule
  ],
  // entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
