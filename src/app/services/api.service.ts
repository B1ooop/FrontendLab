import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = AppConfig.apiUrl;
  private headers = new Headers();

  constructor(
    private http: HttpClient,
  ) {
    this.headers.append('Content-type', 'application/json');
  }


  public signInPostRequest(data: { email: string, password: string }): Observable<any> {
    const apiUrl = `${this.baseUrl}/authentication_token`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };

    return this.http.post(apiUrl, data, options);
  }

  public productListGetRequest(): Observable<any> {
    const apiUrl = `${this.baseUrl}/products`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };

    return this.http.get(apiUrl, options);
  }

}
