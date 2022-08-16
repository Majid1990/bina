import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

  @Input() parentFormGroup?: FormGroup;
  routerFormGroup?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.routerFormGroup = this.fb.group({
      selectedRouterType: new FormControl(null, Validators.required),
    })
    this.parentFormGroup?.addControl('router', this.routerFormGroup)
  }

  inInputData() {
    const ip = this.routerFormGroup?.get('selectedRouterType')?.value;
    let lastDotIndex = ip.lastIndexOf('.');
    if (ip.length - lastDotIndex === 4) {
      const firstPart = ip.substring(0, ip.length - 1);
      const lastPart = ip.substring(ip.length - 1, ip.length);
      const final = firstPart + '.' + lastPart;
      this.routerFormGroup?.get('selectedRouterType')?.setValue(final);
    }

  }


}
