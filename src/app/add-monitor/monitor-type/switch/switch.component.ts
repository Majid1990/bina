import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IpService } from 'src/app/ip.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() parentFormGroup?: FormGroup;
  switchForm?: FormGroup;
  constructor(private fb: FormBuilder, private ipService: IpService) { }

  ngOnInit(): void {

    this.switchForm = this.fb.group({
      switchType: new FormControl(null, Validators.required),
      switchIP: new FormControl(null, Validators.required)
    })
    this.parentFormGroup?.addControl('swName', this.switchForm)
  }
}


