import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.scss']
})
export class TempratureComponent implements OnInit {

  @Input() parentFormGroup?: FormGroup;
  formGroup?: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      degree: new FormControl(null, Validators.required),
      tempretureUnit: new FormControl(null, Validators.required)
    }),
      this.parentFormGroup?.addControl('tempreture', this.formGroup)
  }


}