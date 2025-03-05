import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../enviroment/environment'; // Corrige la ruta de importación
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { usuario } from '../interfaces/usersDetail';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarioDetails(params: string): Observable<any> {
    return this.http.get<usuario>(`${environment.enpoints.host}${environment.urls.users}/${params}`) // Corrige el typo en 'endpoints'
      .pipe(
        map((response: any) => ({
          avatar: response.avatar_url,
          login: response.login,
          followers: response.followers,
          following: response.following,
        })),
        catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

}
