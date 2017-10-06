import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { CookieConfig } from "app/util/variable";
import { UserService } from "app/service/user.service";

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {
  username: string;
  mssv: string;
  totalScores: any;
  listScores: any;
  constructor(private _cookie: CookieService, private _userService: UserService) { }
  ngOnInit(): void {
    this.username = this._cookie.get(CookieConfig.NAME_COOKIE);
    this.mssv = this._cookie.get(CookieConfig.NVID_COOKIE);
    this._userService.getScores().then(result => {
      this.totalScores = result.thong_tin_chung;
      this.listScores = result.result;
      console.log(result);
    })
  }
}
