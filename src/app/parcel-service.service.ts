import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  private parcelData = new BehaviorSubject<any>(null);

  constructor() { }

  setParcelData(data: any) {
    this.parcelData.next(data);
  }

  getParcelData() {
    return this.parcelData.asObservable();
  }
}
