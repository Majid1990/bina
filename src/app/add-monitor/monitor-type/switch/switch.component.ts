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

  onInputIp() {

    // const ip = this.switchForm?.get('switchIP')?.value;
    // var lastDot = ip.lastIndexOf('.');

    // if (ip.length - lastDot === 4) {
    //   const firstPart = ip.substring(0, ip.length - 1);
    //   const lastPart = ip.substring(ip.length - 1, ip.length);
    //   const final = firstPart + '.' + lastPart;
    //   this.switchForm?.get('switchIP')?.setValue(final);
    // }



    // this.ipService.FormValue(this.switchForm);
    // this.switchForm = this.ipService.finalForm;

  }
}


