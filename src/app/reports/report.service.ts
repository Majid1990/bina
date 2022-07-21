import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }


  logReport() {
    return this.http.get('https://logging-18564-default-rtdb.firebaseio.com/posts.json')
  }
  sensorReport() {
    return this.http.get('https://sensor-80f30-default-rtdb.firebaseio.com/posts.json')
  }
  websiteReport() {
    return this.http.get('https://website-4f031-default-rtdb.firebaseio.com/posts.json')
  }

}
