import { Injectable, OnInit } from "@angular/core";
import { HttpCustom } from "app/auth/http-custom";
import { UrlVariable } from "app/util/variable";
import { Http } from "@angular/http";

@Injectable()
export class UserService {
    constructor(private _htpp: Http) { }
    getScores(): Promise<any> {
        return this._htpp.get(`${UrlVariable.URL}/diem/getsby/mssv`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
    getSchedule(body: any): Promise<any> {
        return this._htpp.post(`${UrlVariable.URL}/lichthi/getsby/mssv/namhoc/hocky`, body)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
}