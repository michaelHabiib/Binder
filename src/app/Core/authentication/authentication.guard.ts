// password.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { PasswordDialogComponent } from '../../models/dashboard/password-dialog/password-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PasswordGuard implements CanActivate {
  isRegister: boolean = false
  constructor(private _AuthenticationService: AuthenticationService,
    private router: Router, private dialog: MatDialog) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._AuthenticationService.getPassword().subscribe(value => {
      this.isRegister = value
    })

    if (this.isRegister) {
      return true
    } else {
      this.router.navigate(['/password'])
      return false
    }

  }
}
