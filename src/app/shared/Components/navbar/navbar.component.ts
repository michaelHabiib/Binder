import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Core/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { PasswordDialogComponent } from '../../../models/dashboard/password-dialog/password-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isRegister : boolean = false
  constructor(private _AuthenticationService : AuthenticationService,
    private dialog : MatDialog,
    private router : Router){}
  
  logout(){
    this.isRegister = false
    this._AuthenticationService.setPassword(false)
    localStorage.removeItem('isRegisterd')
    this.router.navigate(['/password'])
  }
  logIn(){
    this.router.navigate(['/password'])
  }
  ngOnInit(): void {
    this._AuthenticationService.getPassword().subscribe(value => {
      this.isRegister = value
      
    })
    if(localStorage.getItem('isRegisterd')){
      this.isRegister = JSON.parse(localStorage.getItem('isRegisterd')!)
      
    }else{
      localStorage.setItem('isRegisterd', JSON.stringify(false))
      this._AuthenticationService.getPassword().subscribe(value => {
        this.isRegister = value
        
      })
    }

  }

  
}
