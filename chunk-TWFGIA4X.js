import{$ as x,A as l,B as b,K as S,T as P,Y as I,Z as y,_,aa as F,ba as C,c as f,ca as E,d as w,ea as j,fa as M,g as h,ga as N,l as n,la as D,m as c,ma as k,na as A,o as g,oa as O,p as m,pa as G,qa as T,r as p,ra as R,s as o,t as s,u as v,y as u}from"./chunk-2G5EOLPP.js";var J=(()=>{let t=class t{constructor(){this.passwordSubject=new f(!1),this.passwordSubject.next(JSON.parse(localStorage.getItem("isRegisterd"))||!1)}setPassword(a){this.passwordSubject.next(a)}getPassword(){return this.passwordSubject.asObservable()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function B(e,t){e&1&&(o(0,"mat-error"),l(1,"Please Enter your password"),s())}function H(e,t){e&1&&(o(0,"h3",11),l(1,"Invalid Password"),s())}var tt=(()=>{let t=class t{constructor(a,r,i){this.router=a,this.dialog=r,this._AuthenticationService=i,this.hide=!0,this.PasswordForm=new C({password:new E("",_.required)}),this.ActualPassword="dummy@123",this.isInvalidPassword=!1}submit(){this.PasswordForm.valid&&(this.PasswordForm.value.password==this.ActualPassword?(this.router.navigate(["/"]),this._AuthenticationService.setPassword(!0),localStorage.setItem("isRegisterd",JSON.stringify(!0)),this.dialog.closeAll()):(this.isInvalidPassword=!0,localStorage.setItem("isRegisterd",JSON.stringify(!1)),this._AuthenticationService.setPassword(!1)))}};t.\u0275fac=function(r){return new(r||t)(c(P),c(I),c(J))},t.\u0275cmp=h({type:t,selectors:[["app-password-dialog"]],decls:17,vars:7,consts:[[1,""],[1,"text-center","my-1","fancyFont"],[1,"d-flex","justify-content-center","align-items-center","w-100"],[3,"formGroup"],["appearance","outline",1,"w-100"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[4,"ngIf"],["class","text-danger text-center",4,"ngIf"],[1,"d-flex","justify-content-end","mb-1","me-1"],[1,"btn","btn-success",3,"click"],[1,"text-danger","text-center"]],template:function(r,i){if(r&1&&(o(0,"section",0)(1,"h1",1),l(2,"Enter Your Password"),s(),o(3,"div",2)(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"password"),s(),v(8,"input",5),o(9,"button",6),u("click",function(){return i.hide=!i.hide}),o(10,"mat-icon"),l(11),s()(),p(12,B,2,0,"mat-error",7),s(),p(13,H,2,0,"h3",8),o(14,"div",9)(15,"button",10),u("click",function(){return i.submit()}),l(16,"Submit"),s()()()()()),r&2){let d;n(4),m("formGroup",i.PasswordForm),n(4),m("type",i.hide?"password":"text"),n(),g("aria-label","Hide password")("aria-pressed",i.hide),n(2),b(i.hide?"visibility_off":"visibility"),n(),m("ngIf",(d=i.PasswordForm.get("password"))==null?null:d.hasError("required")),n(),m("ngIf",i.isInvalidPassword)}},dependencies:[S,D,G,k,A,O,T,R,j,y,x,F,M,N],styles:["section[_ngcontent-%COMP%]{width:100%!important;height:100vh}form[_ngcontent-%COMP%]{width:96%;margin-left:2%}"]});let e=t;return e})();export{J as a,tt as b};
