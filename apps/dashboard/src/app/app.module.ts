import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {
  CoreDataModule,
  coreDataRoutes,
} from '@angular-production-grade-fem/core-data';
import {
  MaterialModule,
  materialRoutes,
} from '@angular-production-grade-fem/material';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, WidgetsComponent, WidgetsListComponent, WidgetDetailsComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
