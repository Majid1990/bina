import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-website-report',
  templateUrl: './website-report.component.html',
  styleUrls: ['./website-report.component.scss']
})
export class WebsiteReportComponent implements OnInit {

  websiteData: WebsiteReport[] = [];
  displayedColumns: string[] = ['monitorDate', 'monitorName', 'responsetime']
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.websiteReport().subscribe((data: any) => {

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.websiteData = [...this.websiteData, data[key] as WebsiteReport]
        }
      }
    })
  }
}
export interface WebsiteReport {
  monitorDate: string,
  monitorName: string,
  responsetime: number
}
