import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../Details';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://localhost:3000/details'

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(this.apiUrl);
  }

}
