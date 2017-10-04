import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { CookieConfig } from "app/util/variable";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public image: string = '';
  public hoTen: string = '';
  public NhanVienID: string = '';

  constructor(private _state: GlobalState, private authService: AuthService, private router: Router, private _cookieService: CookieService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.image = authService.image || _cookieService.get(CookieConfig.IMAGE_COOKIE);
    this.hoTen = authService.hoTen || _cookieService.get(CookieConfig.NAME_COOKIE);
    this.NhanVienID = authService.NhanVienID || _cookieService.get(CookieConfig.NVID_COOKIE);
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  goToLogin() {
    // this.router.navigate(['/admin/login'])
    this.authService.logout()
      .then(() => this.router.navigate(['/admin/login']))
  }
}
