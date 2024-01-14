import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Core/authentication/authentication.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrl: './password-dialog.component.css'
})
export class PasswordDialogComponent {

  hide : boolean = true
  PasswordForm : FormGroup =  new FormGroup({
    password : new FormControl('',Validators.required)
  })
  private ActualPassword = 'dummy@123'
  isInvalidPassword : boolean = false

  constructor(private router : Router, private dialog : MatDialog,
    private _AuthenticationService : AuthenticationService){}

  submit(){
    if(this.PasswordForm.valid){
      const EnteredPassword = this.PasswordForm.value.password
      
      
      if(EnteredPassword == this.ActualPassword){
        this.router.navigate(['/'])
        this._AuthenticationService.setPassword(true)
        localStorage.setItem('isRegisterd',JSON.stringify(true))
        this.dialog.closeAll()
      }else{
        this.isInvalidPassword = true
        localStorage.setItem('isRegisterd',JSON.stringify(false))
        this._AuthenticationService.setPassword(false)
      }
      }
  }
}
