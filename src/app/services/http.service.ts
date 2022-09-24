import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../Details';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://localhost:3000/details'

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(this.apiUrl);
  }

  deleteDetails(details: Details): Observable<Details> {
    const url = `${this.apiUrl}/${details.id}`;
    return this.http.delete<Details>(url);
  }

  updateReminder(details: Details): Observable<Details> {
    const url = `${this.apiUrl}/${details.id}`;
    return this.http.put<Details>(url, details, httpOptions);
  }

  addDetails(details: Details): Observable<Details> {
    return this.http.post<Details>(this.apiUrl, details, httpOptions);
  }

}
