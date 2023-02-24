import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelRoutingModuleTsComponent } from './parcel-routing.module.ts.component';

describe('ParcelRoutingModuleTsComponent', () => {
  let component: ParcelRoutingModuleTsComponent;
  let fixture: ComponentFixture<ParcelRoutingModuleTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelRoutingModuleTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelRoutingModuleTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
