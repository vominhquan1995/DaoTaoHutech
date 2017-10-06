import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'year-picker',

    template: `
    <div>

    <div class="col-xs-2">      
    <select class="form-control"  required>
            <option  *ngFor="let y of years"  [selected]="yy === y ">{{y}}</option>    
    </select>
    </div>

    </div>`
})

export class YearPicker implements OnInit {
    private years: number[] = [];
    private yy: number;
    ngOnInit() {
        this.getYear();
    }
    getYear() {
        var today = new Date();
        this.yy = today.getFullYear();
        //5 năm về trước
        // for (var i = (this.yy - 5); i <= this.yy; i++) {
        //     this.years.push(i);
        // }
        //5 năm về sau
        // for (var i = (this.yy + 5); i >= this.yy; i--) {
        //     this.years.push(i);
        // }
        //3 năm trước 3 năm sau
        for (var i = (this.yy + 3); i >= this.yy - 3; i--) {
            this.years.push(i);
        }
    }

}