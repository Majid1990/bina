import { Component, OnInit } from '@angular/core';
import { MonitorListService } from './monitor-list.service';
import { MonitorInfo } from './monitorList.model';
import { map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';




// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})


export class MonitorListComponent implements OnInit {

  // dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();


  monitoringList: { id: string, monitorInfo: MonitorInfo }[] = [];
  monitoringList2: MonitorInfo[] = [];
  displayedColumns: string[] = ['monitorName', 'monitorType', 'createdBy', 'createdDate', 'frequency', 'monitorInNight', 'mobileNumber', 'email'];
  monitoringDatasource: MonitorDatasource[] = []
  dataSorce = new MatTableDataSource(this.displayedColumns); // ELEMENT_DATA

  length = 0;
  pageSize = 8;
  pageSizeOptions: number[] = [2, 4, 6, 8, 10];
  pageEvent?: PageEvent;
  constructor(private monitorListService: MonitorListService) { }

  ngOnInit(): void {
    this.monitorListService.monitorList().pipe(map((loadedData: any) => {
      const y: { id: string, monitorInfo: MonitorInfo }[] = [];
      for (const key in loadedData) {
        if (loadedData.hasOwnProperty(key)) {
          y.push({ id: key, monitorInfo: loadedData[key] as MonitorInfo });
          this.monitoringList2.push(loadedData[key] as MonitorInfo)
        }
      }
      this.monitoringList = y
      this.length = this.monitoringList2.length

      this.getTableDataSource(0);
      return y;
    })).subscribe(data => {
      console.log(data)
    })
  }
  pageEvent2(eve: any) {
    const from = eve.pageIndex * this.pageSize
    this.getTableDataSource(from);
  }

  private getTableDataSource(from: number) {
    const to: number = from + this.pageSize
    this.monitoringDatasource = this.monitoringList2.map((item) => {
      const mappedData: MonitorDatasource = {
        monitorName: item?.generalInfo?.monitorName,
        createdBy: item?.generalInfo?.createdBy,
        createdDate: item?.generalInfo?.createdDate,
        frequency: item?.monitoringFrequency?.frequency,
        monitorInNight: item?.monitoringFrequency?.monitorInNight,
        mobileNumber: item?.contactInfo?.mobileNumber,
        email: item?.contactInfo?.email,
        monitorType: item?.monitorType
      };

      return mappedData;
    }).slice(from, to);
  }


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface MonitorDatasource {
  monitorName: string,
  createdBy: string,
  createdDate: Date,
  frequency: number,
  monitorInNight: boolean,
  mobileNumber: number,
  email: string,
  monitorType: string
}