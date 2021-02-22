import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private parenturl="http://localhost:3000/data";
  private childurl="http://localhost:4800/data";
  constructor(private http:HttpClient) { }
 

  getall()
  {
    return this.http.get(this.parenturl);
  }
  getchild(){
    return this.http.get(this.childurl)
  }
}
