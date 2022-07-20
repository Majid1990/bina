import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddMonitorService {


  constructor(private http: HttpClient) { }



  createMonitor(eve: any) {
    debugger
    return this.http.post('https://bina-61c21-default-rtdb.firebaseio.com/posts.json', eve)
  }
}
