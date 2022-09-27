import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorListService {

  data: any;
  constructor(private http: HttpClient) { }

  getMonitorList() {
    return this.data = this.http.get('https://monitor-list-default-rtdb.firebaseio.com/posts.json')
  }
  deleteItem(id: string) {
    return this.http.delete('https://monitor-list-default-rtdb.firebaseio.com/posts/' + id + '.json')
  }
  editItem(id: string, value: any) {
    debugger
    return this.http.put('https://monitor-list-default-rtdb.firebaseio.com/posts/' + id + '.json', value)
  }
}