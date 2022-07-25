import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorListService {

  constructor(private http: HttpClient) { }

  monitorList() {
    return this.http.get('https://monitoring-a4b2a-default-rtdb.firebaseio.com/posts.json')
  }
}