import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FbAuthResponse, Admin } from '../intefaces/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

    public error$: Subject<string> = new Subject<string>();
    public pathBase: string = "https://localhost:5001/api/";
    constructor(private http: HttpClient) {}

    get token(): string {
        const expiresDate = new Date(localStorage.getItem('fb-token-exp'));
        if (new Date() > expiresDate) {
          this.logout();
          return null;
        }
        return localStorage.getItem('fb-token');
    }

    login(admin: Admin): Observable<any> {
      admin.returnSecureToken = true;
        return this.http.post(`${this.pathBase}auth`, admin)
            .pipe(
                tap(this.setToken),
                catchError(this.handleError.bind(this))
            );
    }

    logout() {
        this.setToken(null);
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    handleError(error: HttpErrorResponse) {
        const {message} = error.error.error;

        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('Wrong email');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Wrong password');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Nonexistent email');
                break;
        }

        return throwError(error);
    }

    private setToken(response: FbAuthResponse | null) {
        if (response) {
            const expiresDate = new Date(new Date().getTime() + 60 * 60 * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expiresDate.toString());
        } else {
            localStorage.clear();
        }

    }
}
