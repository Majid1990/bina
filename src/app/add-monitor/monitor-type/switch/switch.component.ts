import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() parentFormGroup?: FormGroup;
  switchForm?: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.switchForm = this.fb.group({
      switchType: new FormControl(null, Validators.required),
    })
    this.parentFormGroup?.addControl('swName', this.switchForm)
  }
}


