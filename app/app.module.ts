import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http'
import {routing} from './app.routing'

import { AppComponent }  from './app.component';

import {BasicServiceComponent} from './basic.service/basic.service.component';
import {LogComponent} from './log.service/log.component';
import {LogService} from './log.service/log.service';
import {DataComponent} from './log.service/data.component';
import {DataComponentSend} from './log.service/data.component.send';
import {DataComponentReceive} from './log.service/data.component.receive';
import {DataComponentComposed} from './log.service/data.component.composed';
import {HighlightAttribute} from './highlight/highlight.attribute';
import {UnlessDirective} from './unless.directive/unless.directive';

import {HomeComponent} from './home.component'
import {UserComponent} from './user/user.component'
import {UserDetailComponent} from './user/user.detail'
import {UserEditComponent} from './user/user.edit'
import {UserDetailGuard} from './user/user-detail.guard'
import {UserEditGuard} from './user/user-edit.guard'

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent, 
    BasicServiceComponent,
    LogComponent,
    DataComponent,
    DataComponentSend,
    DataComponentReceive,
    DataComponentComposed,
    HighlightAttribute,
    UnlessDirective,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  providers: [
    LogService,
    UserDetailGuard,
    UserEditGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
