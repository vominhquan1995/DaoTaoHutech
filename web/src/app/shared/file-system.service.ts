import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UrlVariable } from '../util/variable';

@Injectable()
export class FileSystemService {

    constructor(private http: Http) {
    }

    public getFileBlob(serverFileName: string): Promise<any> {
        return this.http.get(`${UrlVariable.URL}/api/files/getFile?fileName=${serverFileName}`)
            .toPromise()
            .then(response => {
                return response.text();
            })
            .catch(error => {
                console.error('ERROR khi get 1 file', error);
                Promise.reject(error);
            })
    }

    public getFiles(idItem: any, tableName: string): Promise<any> {
        return this.http.get(`${UrlVariable.URL}/api/files/getFiles?idItem=${idItem}&tableName=${tableName}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('ERROR khi get files', error);
                Promise.reject(error);
            })
    }

    public deleteFile(fileSystemGuid: any[]): Promise<any> {
        let body = {};
        body['fileSystemGuid'] = fileSystemGuid;
        return this.http.post(`${UrlVariable.URL}/api/files/deleteFiles`, body)
            .toPromise()
            .catch(error => {
                console.error('ERROR khi delete file', error);
                Promise.reject(error);
            })
    }
}