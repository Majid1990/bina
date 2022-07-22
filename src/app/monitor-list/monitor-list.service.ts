import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorListService {

  constructor(private http: HttpClient) { }

  monitorList() {
    return this.http.get('https://bina-61c21-default-rtdb.firebaseio.com/posts.json')
  }
}
