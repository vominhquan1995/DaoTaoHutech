import * as moment from 'moment'
export class UrlVariable {

    //API LOCAL
    // public static readonly URL_LOGIN = 'http://localhost:3100';
    // public static readonly URL = 'http://localhost:3100';

    public static readonly URL_LOGIN = 'http://phanquyenapi.lamgigio.net';
    public static readonly URL = 'http://dichvubotapi.lamgigio.net';

    // public static readonly URL_LOGIN = 'http://api.hutech.edu.vn';
    // public static readonly URL = 'http://api.hutech.edu.vn';

    //API BETA RELEASE TEST
    // public static readonly URL_LOGIN = 'http://apibeta.hutech.edu.vn';
    // public static readonly URL = 'http://apibeta.hutech.edu.vn';


    public static readonly URL_UPLOADFILE = `${UrlVariable.URL}/api/files/upload`;
    // public static readonly URL_LOG = 'http://test6.hutech.edu.vn';
    public static readonly URL_LOG = 'http://log.hutech.edu.vn';
}

export class Version {
    public static readonly VERSION = "VERSION";
    public static readonly VERSION_ID = "0.0.2";
}

export class MenuAuthen {

    public static readonly LIST_MENU_BOT_DAI_CA = 5;
}





export class ErrorVariable {
    public static readonly CONNECTION_REFUED = 1321;
}

export class ResponseStatusCode {
    public static readonly CONNECTION_REFUED = 0;
}

export class StateVariable {
    public static readonly EDIT = 1;
    public static readonly CREATE = 2;
}
export class CkEditorConfig {
    public static readonly CKEDITOR_CONFIG = {
        uiColor: '#F0F3F4',
        // height: '175',
        toolbar: [
            { name: 'clipboard', items: ['PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'insert', items: ['Image', 'Table', 'Iframe'] },
            { name: 'links', items: ['Link'] },
            { name: 'tools', items: ['Maximize'] },
            { name: 'document', items: ['Source'] },
            '/',
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat'] },
            { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', '-', 'Blockquote'] },
            { name: 'styles', items: ['Styles', 'FontSize'] },
            { name: 'about', items: ['About'] }
        ],
        resize_enabled: true
    };
}

/**
 * Thời gian hết hạn của Cookie
 */
export class CookieConfig {
    /**Thời gian chết của cookie */
    public static readonly EXPIRES = 7;
    /**Tên Object lưu dưới cookie Authen */
    public static readonly AUTHEN_COOKIE = 'Auth-menu';
    public static readonly IMAGE_COOKIE = 'Image-menu';
    public static readonly NVID_COOKIE = 'Nvid-menu';
    public static readonly NAME_COOKIE = 'name-menu';
    //add new by QuanVo
    public static readonly isVerify = 'Verify';
}

/**
 * @author Bình
 * một mảng đối tượng gồm id và ten của trạng thái xử lý
 */
export let TrangThaiXuLySuCo = [
    { id: 1, text: 'Đợi xử lý' },
    { id: 2, text: 'Đang xử lý' },
    { id: 0, text: 'Xong' },
]


export let ThoiGian = {
    gio: { batdau: 0, ketthuc: 23 },
    phut: { batdau: 0, ketthuc: 59 }
}
