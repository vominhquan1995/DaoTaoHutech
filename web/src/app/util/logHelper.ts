export class LogHelper {
    public static constructBody() {
        let body: any = {};
        body['diuu'] = 'tuts-manager';
        return body;
    }

    public static constructQuery(ho_ten?: any) {
        let query = `?diuu=tuts-manage&`;
        return query;
    }
}