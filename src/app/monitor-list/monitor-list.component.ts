import { Component, OnInit } from '@angular/core';
import { MonitorListService } from './monitor-list.service';
import { MonitorInfo } from './monitorList.model';
import { map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})

export class MonitorListComponent implements OnInit {

  clickedRows = new Set<PeriodicElement>();
  monitors: MonitorInfo[] = [];
  displayedColumns: string[] = ['monitorName', 'monitorType', 'createdBy', 'createdDate', 'frequency', 'monitorInNight', 'mobileNumber', 'email', 'delete', 'edit'];
  monitorListDatasource: MonitorDatasource[] = []
  dataSorce = new MatTableDataSource(this.displayedColumns);
  storedData: string = '';
  length = 0;
  pageSize = 9;
  pageSizeOptions: number[] = [2, 4, 6, 8, 10];
  pageEvent?: PageEvent;
  constructor(private monitorListService: MonitorListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMonitors();


  }
  private getMonitors() {
    this.monitorListService.getMonitorList().pipe(map((loadedData: any) => {
      this.monitors = [];
      const y: { id: string; monitorInfo: MonitorInfo; }[] = [];
      for (const key in loadedData) {
        if (loadedData.hasOwnProperty(key)) {
          let monitorInfo = loadedData[key] as MonitorInfo;
          monitorInfo.id = key;
          this.monitors.push(monitorInfo);
        }
      }
      this.length = this.monitors.length;

      this.getTableDataSource(0);
      return y;
    })).subscribe(data => {
      console.log(data);

    });

  }

  pageEvent2(eve: any) {
    const from = eve.pageIndex * this.pageSize
    this.getTableDataSource(from);
  }

  private getTableDataSource(from: number) {
    const to: number = from + this.pageSize
    this.monitorListDatasource = this.monitors.map((item) => {
      const mappedData: MonitorDatasource = {
        monitorName: item?.generalInfo?.monitorName,
        createdBy: item?.generalInfo?.createdBy,
        createdDate: item?.generalInfo?.createdDate,
        frequency: item?.monitoringFrequency?.frequency,
        monitorInNight: item?.monitoringFrequency?.monitorInNight,
        mobileNumber: item?.contactInfo?.mobileNumber,
        email: item?.contactInfo?.email,
        monitorType: item?.monitorType,
        id: item?.id
      };

      return mappedData;
    }).slice(from, to);
  }

  deleteItem(id: string) {
    this.monitorListService.deleteItem(id).subscribe(() => {
      this.getMonitors()
    })
  }

  openDialog(element: MonitorDatasource): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log('The dialog was closed');
      this.storedData = result;
      this.getMonitors()
    });
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
  monitorType: string,
  id: string
}