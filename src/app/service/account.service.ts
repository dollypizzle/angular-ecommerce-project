import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
}

login(email, password) {
    return this.http.post<User>('https://e-papi-api.herokuapp.com/login', { email, password })
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user.token));
            this.userSubject.next(user);
            return user;
        }));
}

logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

register(user: User) {
    return this.http.post('https://e-papi-api.herokuapp.com/register', user);
}

}
