import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.scss']
})
export class LogReportComponent implements OnInit {
  reportLogData: LogReport[] = []
  displayedColumns: string[] = ['ip', 'level', 'message', 'monitorData', 'monitorName', 'server', 'source']
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.logReport().subscribe((data: any) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.reportLogData = [...this.reportLogData, data[key] as LogReport]
        }
        if (this.reportLogData.filter(x => x.level == 'warning')) {

        }
      }

    })
  }

}

export interface LogReport {
  ip: string,
  level: string,
  message: string,
  monitorData: string,
  monitorName: string,
  server: string,
  source: string
}