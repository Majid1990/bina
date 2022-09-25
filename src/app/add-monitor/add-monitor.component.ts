import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddMonitorService } from './add-monitor.service';

@Component({
  selector: 'app-add-monitor',
  templateUrl: './add-monitor.component.html',
  styleUrls: ['./add-monitor.component.scss']
})
export class AddMonitorComponent implements OnInit {
  selectedMonitor?: any;
  mainFormGroup?: FormGroup;
  website: string = '';
  constructor(private fb: FormBuilder, private router: Router, private addMonitorService: AddMonitorService) { }

  ngOnInit(): void {
    this.mainFormGroup = this.fb.group({
      contactInfo: this.fb.group({
        mobileNumber: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      generalInfo: this.fb.group({
        monitorName: new FormControl(null, Validators.required),
        createdBy: new FormControl(null, Validators.required),
        createdDate: new FormControl(null, Validators.required)
      }),
      monitoringFrequency: this.fb.group({
        frequency: new FormControl(null, Validators.required),
        monitorInNight: new FormControl(null),
      }),
      monitorType: new FormControl(null, Validators.required),
    })
  }

  selectedDevice(eve: any) {
    this.router.navigate(['' + eve.value], {})
  }

  submit(eve: any) {
    this.addMonitorService.createMonitor(this.mainFormGroup?.value).subscribe(x => {
      console.log(x)
    })
    // this.mainFormGroup?.reset()
  }
  webLinkURLReceived(e: string) {
    this.website = e
  }

}