import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import {Observable, map, throwError, tap, catchError} from 'rxjs';
import {JwtResponse} from "../interface/jwt-response";
import {Auth} from "../interface/auth";

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  private baseUrl = 'http://localhost:8081'; // Atualize com a URL do seu backend

    constructor(private http: HttpClient) {

    }

  public login(credentials: Auth): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          // Armazene o token JWT com segurança (local storage ou cookies)
          console.log(response.jwtToken)
          localStorage.setItem('token', response.jwtToken);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // Erro de conexão
      return throwError('Falha na conexão ao servidor');
    } else {
      // Erro de backend
      const errMessage = error.error instanceof ErrorEvent ? error.error.message : error.statusText;
      return throwError(errMessage);
    }
  }

    public registrarUsuario(usuario: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/registrar-usuario`, usuario);
    }
}
