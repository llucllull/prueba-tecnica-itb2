import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'https://api.tour2b.hub2b.travel/activities';

  constructor(private http: HttpClient) { }

  getActivitiesData(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
}
