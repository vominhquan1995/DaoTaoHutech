import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {
    transform(status: number): string {
        switch (status) {
            case 0:
                return 'Đã gửi';
            case 1:
                return 'Chờ gửi';
            case 2:
                return 'Lưu nháp';
            default:
                return 'Gửi thất bại';
        }
    }
}