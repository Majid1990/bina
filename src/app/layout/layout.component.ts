import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  status: boolean = false;
  @ViewChild('scratch') sizeElement?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {

    if (this.status == false) {
      this.status = true;
      if (this.sizeElement)
        this.sizeElement.nativeElement.style.marginLeft = '70px',
          this.sizeElement.nativeElement.style.transition = 'margin-left .3s';
    }
    else if (this.status == true) {
      this.status = false;
      if (this.sizeElement)
        this.sizeElement.nativeElement.style.marginLeft = '0px',
          this.sizeElement.nativeElement.style.transition = 'margin-left .3s';
    }

  }
}