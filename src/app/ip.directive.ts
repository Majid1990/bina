import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Directive({
  selector: '[appIp]'
})
export class IpDirective implements OnInit {

  @HostListener('input') keyup(eventData: any) {
    // const ip = this.ipService.formsValue;
    const ip = this.el.nativeElement
    var lastDot = ip.lastIndexOf('.');

    if (ip.length - lastDot === 4) {

      const firstPart = ip.substring(0, ip.length - 1);
      const lastPart = ip.substring(ip.length - 1, ip.length);
      const final = firstPart + '.' + lastPart;
      // this.switchForm?.get('switchIP')?.setValue(final);
      // var finalResult = this.el.nativeElement.setValue(final)
      // this.ipService.finalForm.setValue(finalResult)
      this.el.nativeElement
    }
  }

  constructor(private el: ElementRef, private ipService: IpService) { }
  ngOnInit() {



  }




}
