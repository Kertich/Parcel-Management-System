import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ParcelFormComponent } from '../parcel-form/parcel-form.component';
import { ParcelListComponent } from '../parcel-list/parcel-list.component';
import { ParcelService } from '../parcel-service.service';
import { ParcelRoutingModule } from '../parcel-routing.module/parcel-routing.module.module';

@NgModule({
  declarations: [
    ParcelFormComponent,
    ParcelListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ParcelRoutingModule
  ],
  providers: [
    ParcelService
  ],
  exports: [
    ParcelFormComponent,
    ParcelListComponent
  ]
})
export class ParcelModule { }
