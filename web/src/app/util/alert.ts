import { default as swal } from 'sweetalert2';

export class Alert {

    public static showUpdateAlertWithCancel(title: string, text: string): Promise<void> {
        return swal({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cập nhập',
            cancelButtonText: 'Không'
        })
    }

    public static showWaring(title: string, text: string, confirmBText: string, cancelBText: string): Promise<any> {
        return swal({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmBText,
            cancelButtonText: cancelBText
        })
    }

    public static showCheck(title: string, text: string, confirmBText: string, cancelBText: string): Promise<any> {
        return swal({
            title: title,
            html: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmBText,
            cancelButtonText: cancelBText,
        })
    }

    public static showDeleteAlertWithCancel(title: string, text: string): Promise<any> {
        return swal({
            title: title,
            text: text,
            type: 'warning',
            inputAutoTrim: true,
            input: 'text',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không'
        })
    }

    public static showQuestion(title: string, text: string, confirmBText: string, cancelBText: string): Promise<any> {
        return swal({
            title: title,
            text: text,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmBText,
            cancelButtonText: cancelBText
        })
    }

    public static showAuthen(title: string, text: string): Promise<any> {
        return swal({
            title: title,
            text: text,
            type: 'warning',
            timer: 3000,
            showCancelButton: false
        })
    }

    public static showSuccess(title: string, text: string) {
        return swal(title, text, 'success');
    }

    public static showWarning(title: string, text: string) {
        return swal(title, text, 'warning');
    }
}