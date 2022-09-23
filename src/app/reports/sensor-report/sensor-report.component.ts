import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-sensor-report',
  templateUrl: './sensor-report.component.html',
  styleUrls: ['./sensor-report.component.scss']
})
export class SensorReportComponent implements OnInit {
  dataList2: DisplaySensor[] = []
  sensorData: DisplaySensor[] = [];
  displayedColumns: string[] = ['monitorName', 'monitorDate', 'temprature']

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {

    this.reportService.sensorReport().pipe(map((data: any) => {
      const y: { id: string, sensorReportData: DisplaySensor }[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          y.push({ id: key, sensorReportData: data[key] as DisplaySensor });
          this.dataList2.push(data[key] as DisplaySensor)
          //  if (data.temprature.value > 30) { }
        }
      }
      this.sensorDatabaseSorce();
      return y;
    })).subscribe(x => {

      console.log(x)
    })
  }
  private sensorDatabaseSorce() {
    this.sensorData = this.dataList2.map((item) => {
      const mappedData: DisplaySensor = {
        monitorDate: item.monitorDate,
        monitorName: item.monitorName,
        temprature: item.temprature
      }
      return mappedData;
    })
  }

}
export interface DisplaySensor {
  monitorDate: string;
  monitorName: string;
  temprature: number;
}
