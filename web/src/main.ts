import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as moment from 'moment';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// thay đổi cách Date.toJSON hoạt động
Date.prototype.toJSON = function () { return moment(this).format(); }