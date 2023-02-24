import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
import { ParcelModule } from './parcel/parcel.module';
import { ParcelRoutingModuleTsComponent } from './parcel-routing.module.ts/parcel-routing.module.ts.component';

const routes: Routes = [
  { path: 'parcels', component: ParcelListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParcelFormComponent,
    ParcelListComponent,
    ParcelRoutingModuleTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
