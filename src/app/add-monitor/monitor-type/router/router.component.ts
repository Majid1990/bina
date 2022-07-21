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
      // selectedRouter: new FormControl(null, [Validators.required]),
      selectedRouterType: new FormControl(null, Validators.required),
    })
    this.parentFormGroup?.addControl('router', this.routerFormGroup)
  }

}
