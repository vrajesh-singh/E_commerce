import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// nahi chaiye ye main module mein
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { SharedModule } from './shared/shared.module';
// import { AuthModule } from './components/auth/auth.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // FeatherIconComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // main module mein nahi chiahiye ye
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
