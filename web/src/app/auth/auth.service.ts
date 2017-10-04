import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { CookieService } from "ngx-cookie";

import { TokenService } from './token.service';
import { UrlVariable, CookieConfig, Version } from "app/util/variable";

@Injectable()
export class AuthService {
    public image: string = '';
    public hoTen: string = '';
    public NhanVienID: string = '';

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private _tokenService: TokenService, private _http: Http, private _cookieService: CookieService) {

    }

    public isLoggedIn(): boolean {
        if (this._tokenService.isTokenExists() || this._tokenService.isVersionExists()) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * @function Login 
     * @param username mssv
     * @param password password
     */
    login(username: string, password: string): Promise<boolean> {
        return this._http.post(`${UrlVariable.URL_LOGIN}/login`, {
            'username': username,
            'password': password
        }).toPromise()
            .then(res => {

                //get token và list menu active
                const token = res.json().token;
                const listMenu_active = res.json().listmenu_active;
                this.hoTen = res.json().result.Ho_Ten;
                this.image = res.json().result.image;
                this.NhanVienID = res.json().result.NhanVienID;


                this._tokenService.setToken(token);
                this._cookieService.put(CookieConfig.AUTHEN_COOKIE, listMenu_active);
                this._cookieService.put(Version.VERSION, Version.VERSION_ID);
                //set hoten image NhanVienID
                this._cookieService.put(CookieConfig.IMAGE_COOKIE, this.image);
                this._cookieService.put(CookieConfig.NVID_COOKIE, this.NhanVienID);
                this._cookieService.put(CookieConfig.NAME_COOKIE, this.hoTen);
                return true;
            });

        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): Promise<any> {
        /**
         * Logout phía server chưa có
         */
        return this._http.post(`${UrlVariable.URL_LOGIN}/logout`, {})
            .toPromise()
            .then(() => {
                return this._tokenService.clearToken();
            })
    }
}
