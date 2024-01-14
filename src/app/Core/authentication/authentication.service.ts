import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(){
    this.passwordSubject.next( JSON.parse(localStorage.getItem('isRegisterd')!) || false);
    
  }
  private passwordSubject = new BehaviorSubject<boolean>(false); // Initial value is an empty string

  setPassword(password: boolean): void {
    this.passwordSubject.next(password);
  }

  getPassword(): Observable<boolean> {
    return this.passwordSubject.asObservable();
  }
}
