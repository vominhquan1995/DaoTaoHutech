import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

// import 'style-loader!./login.scss';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.scss']
})
export class Login {
  public error: string = '';
  constructor( private authService: AuthService, private router: Router) {
  }

  public Login(form:any){
   
      this.authService.login(form.value.mssv, form.value.password)
        .then(() => {
          if (this.authService.isLoggedIn()) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
            // Redirect the user
            this.router.navigate([redirect]);
          }
        }, (error) => {
          this.error = error._body;
          console.error(error)
        });
    }
}
