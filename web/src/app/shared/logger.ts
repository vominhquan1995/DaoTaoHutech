import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core'
import { UrlVariable } from '../util/variable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LogService {
    private url = UrlVariable.URL_LOG;
    private ho_ten;

    constructor(private _http: Http) {
    }
    /**
    * gửi log
    */
    public Log = (acction: any) => {
        let body = new URLSearchParams();
        body.append("user_des", '');
        body.append("user_id", 'tuts_manager');
        body.append("app", "web 5p");
        body.append("content", acction);
        this._http.post(`${this.url}/api/logerror/save`, body)
            .toPromise()
            .catch(err => console.log(err));
        console.log(acction);
    }
}
