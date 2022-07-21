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
      selectedDatabasetype: new FormControl(null, Validators.required)
    })
    this.parentFormGroup?.addControl('database', this.databaseFormGroup)
  }

}
