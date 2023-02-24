import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent implements OnInit {
  parcelForm: FormGroup;
  constructor(private fb: FormBuilder, private parcelService: ParcelService) { }

  
  ngOnInit(): void {
    this.parcelForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@travel\.com$/)]],
      destination: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.parcelForm.valid) {
      // TODO: send parcel data to the server
      const parcelData = this.parcelForm.value;
      this.parcelService.setParcelData(parcelData);
      console.log(this.parcelForm.value);
      this.parcelForm.reset();
    } else {
      // TODO: display error messages
      console.log('Form is invalid');
    }
  }
  

}
