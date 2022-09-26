import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddMonitorService } from '../../add-monitor.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  @Output() webLinkURL = new EventEmitter<string>();
  @Input() parentFormGroup?: FormGroup;

  websiteForm?: FormGroup
  majid: number = 20;
  websiteLink: string = '';
  constructor(private addMonitorService: AddMonitorService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.parentFormGroup?.addControl('website',
      this.fb.group({
        websiteName: new FormControl(null, [Validators?.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
        warning: new FormControl(null, Validators.required),
        critical: new FormControl(null, Validators.required)
      }))
  }

}
