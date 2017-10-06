import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { UserService } from "app/service/user.service";
import { CookieConfig } from "app/util/variable";
@Component({
    selector: 'exam-schedule',
    templateUrl: './exam-schedule.component.html',
    styleUrls: ['./exam-schedule.component.scss']
})
export class ExamScheduleComponent {
    username: string;
    mssv: string;
    constructor(private _cookie: CookieService, private _userService: UserService) { }
    ngOnInit(): void {
        this.username = this._cookie.get(CookieConfig.NAME_COOKIE);
        this.mssv = this._cookie.get(CookieConfig.NVID_COOKIE);
        // this._userService.getSchedule('dsds').then(result => {
        //     console.log(result);
        // })
    }
    show(form: any) {
        console.log(form);
        alert('hihi')
    }
}