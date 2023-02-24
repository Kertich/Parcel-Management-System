import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelFormComponent } from '../parcel-form/parcel-form.component';
import { ParcelListComponent } from '../parcel-list/parcel-list.component';
import { AuthGuard } from './auth.guard';
import { ParcelRoutingModuleTsComponent } from '../parcel-routing.module.ts/parcel-routing.module.ts.component';

const routes: Routes = [
  { path: '', component: ParcelListComponent },
  { path: 'add', component: ParcelFormComponent },
  { path: 'parcels', loadChildren: () => import('../parcel/parcel.module').then(m => m.ParcelModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ParcelRoutingModule],
  exports: [RouterModule, RouterModule, ParcelListComponent, ParcelFormComponent]
})
export class ParcelRoutingModule { }

