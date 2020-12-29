import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitOfWorkService {

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url): Observable<T> {
    return this.httpClient.get<T>(`${environment.baseUrl}${url}`, { headers: this.getHttpOptions() }).pipe(retry(1), catchError(this.errorHandler));
  }

  public post<T, K>(url, data: K): Observable<T> {
    return this.httpClient.post<T>(`${environment.baseUrl}/${url}`, JSON.stringify(data), { headers: this.getHttpOptions() }).pipe(retry(1), catchError(this.errorHandler));
  }

  getHttpOptions(): HttpHeaders {
    let token = localStorage.getItem('token');
    if(token === null)
      return new HttpHeaders({ 
            'Content-Type': 'application/json',
        });
    return new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      });
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}