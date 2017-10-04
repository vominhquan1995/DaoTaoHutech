import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptionsArgs,
    Request,
    ConnectionBackend,
    RequestOptions,
    XHRBackend
} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { TokenService } from './token.service';
import * as _ from 'lodash';
import { Alert } from "app/util/alert";
import { Router } from "@angular/router";

@Injectable()
export class HttpCustom extends Http {

    constructor(
        protected _backend: ConnectionBackend,
        protected _defaultOption: RequestOptions,
        private _tokenService: TokenService,
        private router: Router
    ) {
        super(_backend, _defaultOption);
    }



    request(url: string | Request, options?: RequestOptionsArgs): any {
        return super.request(url, this._setCustomHeaders(options))
            .catch(error => {
                /**Nếu Lỗi chứng thực 401*/
                if (error.status === 401) {
                    Alert.showAuthen(
                        'Hết session xin vui lòng đăng nhập lại',
                        'Sau 3s về trang Login'
                    );
                    setTimeout(() => {
                        this.router.navigate(['/admin/login']);
                    }, 3100);
                    return Observable.throw(error);
                }
                return Observable.throw(error)
            });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): any {
        return super.post(url, body, this._setCustomHeaders(options));
    }

    get(url: string, options?: RequestOptionsArgs): any {
        return super.get(url, this._setCustomHeaders(options));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): any {
        return super.put(url, body, this._setCustomHeaders(options));
    }

    delete(url: string, options?: RequestOptionsArgs): any {
        return super.delete(url, this._setCustomHeaders(options));
    }

    private _setCustomHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (_.isNil(options)) {
            options = new RequestOptions({});
        }

        if (_.isNil(options.headers)) {
            options.headers = new Headers();
        }

        const token = this._tokenService.getToken();
        if (!_.isNil(token)) {
            options.headers.set('Authorization', 'JWT ' + token);
        }

        return options;
    }


}


export function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, tokenService: TokenService, router: Router): Http {
    return new HttpCustom(xhrBackend, requestOptions, tokenService, router);
}
