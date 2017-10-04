/**module */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/**
 * other
 */
import { UrlVariable, ErrorVariable, ResponseStatusCode } from '../util/variable';
@Injectable()
export class DanhMucService {

    constructor(
        private http: Http
    ) { }
    /**
     * @author Bình
     * @param contact_id
     * danh mục theo phân quyền và không lấy theo danh mục cha
     */
    getsByDanhMucID = (danh_muc_id: number): Promise<any> => {
        return this.http.get(`${UrlVariable.URL_LOGIN}/api/danhmuc/getsby/danhmucid?danh_muc_id=${danh_muc_id}`)
            .toPromise()
            .then(value => value.json().result)
            .catch(err => Promise.reject(err));
    }

    /**
     * @author Võ 20-6-2017
     * Lấy danh mục con theo phân quyền dựa vào danh mục cha
     */
    getChildCategories = (danh_muc_id: number): Promise<any> => {
        return this.http.get(`${UrlVariable.URL_LOGIN}/api/danhmuc/getchildcate?danh_muc_id=${danh_muc_id}`)
            .toPromise()
            .then(value => value.json().result)
            .catch(err => Promise.reject(err));
    }

    /**
     * @author Võ 23-6-2017
     * lấy link của danh mục
     */
    getLink = (danh_muc_id: number): Promise<any> => {
        return this.http.get(`${UrlVariable.URL_LOGIN}/api/danhmuc/getlink?danh_muc_id=${danh_muc_id}`)
            .toPromise()
            .then(value => value.json().result)
            .catch(err => Promise.reject(err));
    }

    /**
     * @author Võ 20-6-2017
     * Lấy danh mục con dựa vào danh mục cha (Không theo phân quyền)
     */
    getFullChildCategories = (danh_muc_id: number): Promise<any> => {
        return this.http.get(`${UrlVariable.URL_LOGIN}/api/danhmuc/getfullchildcate?danh_muc_id=${danh_muc_id}`)
            .toPromise()
            .then(value => value.json().result)
            .catch(err => Promise.reject(err));
    }

}