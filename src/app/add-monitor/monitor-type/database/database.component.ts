import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  @Input() parentFormGroup?: FormGroup;
  databaseFormGroup?: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.databaseFormGroup = this.fb.group({
      selectedDatabase: new FormControl(null, [Validators.required]),
      selectedDatabasetype: new FormControl(null, Validators.required),
      selectedDatabaseIP: new FormControl(null, Validators.required),

    })
    this.parentFormGroup?.addControl('database', this.databaseFormGroup)
  }

  onIpInput() {
    const ip: string = this.databaseFormGroup?.get('selectedDatabaseIP')?.value
    let lastDotIndex = ip.lastIndexOf('.');

    if (ip.length - lastDotIndex === 4) {
      const firstPart = ip.substring(0, ip.length - 1)
      const secondPart = ip.substring(ip.length - 1, ip.length)
      const final = firstPart + '.' + secondPart
      this.databaseFormGroup?.get('selectedDatabaseIP')?.setValue(final)
    }
  }

}