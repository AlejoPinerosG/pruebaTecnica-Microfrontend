import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../enviroment/environment'; // Corrige la ruta de importación
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { followers } from '../interfaces/follower';
import { ApiResponse } from '../interfaces/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getFollowersList(params: string): Observable<any> {
    return this.http.get<ApiResponse<followers[]>>(`${environment.enpoints.host}${environment.urls.users}/${params}/${environment.urls.followers}`) // Corrige el typo en 'endpoints'
      .pipe(
        map((response: any) => {
          console.log('response', response);
            return response.map((usuario: any) => ({
            avatar: usuario.avatar_url,
            login: usuario.login,
            }));
        }),
        catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

}
