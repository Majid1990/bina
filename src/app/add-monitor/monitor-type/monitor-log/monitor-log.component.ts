import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monitor-log',
  templateUrl: './monitor-log.component.html',
  styleUrls: ['./monitor-log.component.scss']
})
export class MonitorLogComponent implements OnInit {
  @Input() parentFormGroup?: FormGroup;
  logFormGroup?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.logFormGroup = this.fb.group({
      selectedLog: new FormControl(null, Validators.required),
      selectedLogregex: new FormControl(null, Validators.required),
      credential: new FormControl(null, Validators.required),
      // selectedLogType: new FormControl(null),
      information: new FormControl(null),
      error: new FormControl(null),
      warning: new FormControl(null),
    })

    this.parentFormGroup?.addControl('log', this.logFormGroup)
  }

  onInput() {
    const ip = this.logFormGroup?.get('selectedLog')?.value;
    let lastPoint = ip.lastIndexOf('.');
    if (ip.length - lastPoint === 4) {
      const firstPart = ip.substring(0, ip.length - 1);
      const lastPart = ip.substring(ip.length - 1, ip.length);
      const final = firstPart + '.' + lastPart;
      this.logFormGroup?.get('selectedLog')?.setValue(final);
    }

  }

}
