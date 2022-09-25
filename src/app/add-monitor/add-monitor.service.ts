import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddMonitorService {


  constructor(private http: HttpClient) { }



  createMonitor(eve: any) {

    return this.http.post('https://monitor-list-default-rtdb.firebaseio.com//posts.json', eve)

  }
}
