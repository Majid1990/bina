import { Directive } from '@angular/core';

@Directive({
  selector: '[appIpYpe]'
})
export class IpYpeDirective {

  ipType: any = "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
  constructor() {
    return this.ipType;
  }


}
