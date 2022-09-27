import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MonitorDatasource } from '../monitor-list.component';
import { MonitorListService } from '../monitor-list.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  mainFormGroup?: FormGroup;
  animal?: string;
  name?: string;
  id?: string;
  myData?: FormGroup;
  selectedMonitor?: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MonitorDatasource, private fb: FormBuilder, private monitorListService: MonitorListService) {
  }

  ngOnInit(): void {

    this.mainFormGroup = this.fb.group({
      contactInfo: this.fb.group({
        mobileNumber: new FormControl(this.data.mobileNumber, Validators.required),
        email: new FormControl(this.data.email, [Validators.required, Validators.email])
      }),
      generalInfo: this.fb.group({
        monitorName: new FormControl(this.data.monitorName, Validators.required),
        createdBy: new FormControl(this.data.createdBy, Validators.required),
        createdDate: new FormControl(this.data.createdDate, Validators.required)
      }),
      monitoringFrequency: this.fb.group({
        frequency: new FormControl(this.data.frequency, Validators.required),
        monitorInNight: new FormControl(this.data.monitorInNight),
      }),
      monitorType: new FormControl(this.data.monitorType, Validators.required),
    })
    // this.mainFormGroup.get("monitorType")?.disable()
    // this.mainFormGroup.get("generalInfo")?.get("monitorName")?.disable()
  }
  submit() {
    this.monitorListService.editItem(this.data.id, this.mainFormGroup?.value).subscribe()
  }


}

export interface DialogData {
  animal: string;
  name: string;
}