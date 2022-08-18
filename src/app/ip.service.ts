import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  formsValue: any;
  finalForm: any;
  constructor() { }

  FormValue(eve: any) {

    return this.formsValue = eve;
  }
}
