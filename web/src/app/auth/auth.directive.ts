import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { CookieConfig, MenuAuthen } from "app/util/variable";

@Directive({
    selector: '[myauthen]',
})
export class AuthDirective implements OnInit {
    @Input() menu: string = '';

    constructor(public element: ElementRef, public renderer: Renderer, private _cookieService: CookieService) {
    }

    ngOnInit() {
        // console.log(this.menu)
        const keys = this._cookieService.get(CookieConfig.AUTHEN_COOKIE);
        if ((!keys || keys.length === 0) && +this.menu !== -1) {
            // console.log(this.menu)

            this.element.nativeElement.remove();
            return;
        }
        const authen = keys.split(",").find(x => +x === +this.menu);
        // console.log(keys.split(","))
        if (!authen && this.menu && +this.menu !== -1) {
            // console.log(this.menu, "bi xoa")
            this.element.nativeElement.remove();
        }
    }
}
