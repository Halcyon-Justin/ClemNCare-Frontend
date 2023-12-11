import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private apiUrl = 'http://localhost:8080/api/';
  private familiesEndpoint = 'families/';

  constructor(private http: HttpClient) { }

  getFamilies(): Observable<Family[]> {
    return this.http.get<any>(`${this.apiUrl}${this.familiesEndpoint}`)
      .pipe(
        map(response => response.data), // Extract the 'data' property
        catchError(this.handleError)
      );
  }

  getFamily(familyId: number): Observable<Family> {
    return this.http.get<Family>(`${this.apiUrl}${this.familiesEndpoint}${familyId}`)
    .pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  saveFamily(Family: Family): Observable<Family> {
    return this.http.post<Family>(`${this.apiUrl}${this.familiesEndpoint}`, Family)
    .pipe(catchError(this.handleError));
  }

  deleteFamily(familyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.familiesEndpoint}${familyId}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

