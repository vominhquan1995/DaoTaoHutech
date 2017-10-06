import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { CookieConfig } from "app/util/variable";
import { AuthService } from "app/auth/auth.service";
@Component({
  selector: 'nav-bar',
  styleUrls: ['./nav-bar.component.scss'],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  username: string;
  constructor(private _cookie: CookieService, private _auth: AuthService) { }
  ngOnInit(): void {
    this.username = this._cookie.get(CookieConfig.NAME_COOKIE);
  }
  logout() {
    this._auth.logout();
  }
}