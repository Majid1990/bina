import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Directive({
  selector: '[appIp]'
})
export class IpDirective implements OnInit {

  @HostListener('input') keyup(eventData: any) {
    // const ip = this.ipService.formsValue;
    const ip = this.el.nativeElement.value;
    var lastDot = ip.lastIndexOf('.');
    if (ip.length - lastDot === 4) {
      const firstPart = ip.substring(0, ip.length - 1);
      const lastPart = ip.substring(ip.length - 1, ip.length);
      const final = firstPart + '.' + lastPart;
      this.el.nativeElement.value = final
    }
  }

  constructor(private el: ElementRef, private ipService: IpService) { }
  ngOnInit() {
  }

}
