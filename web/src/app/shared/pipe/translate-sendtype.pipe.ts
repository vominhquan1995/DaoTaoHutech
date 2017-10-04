import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'translateSendType'
})
export class TranslateSendTypePipe implements PipeTransform {
    transform(cach_thuc_send: number): string {
        switch (cach_thuc_send) {
            case 1:
                return 'Cá nhân';
            case 2:
                return 'Nhóm';
            default:
                return 'Group';
        }
    }
}