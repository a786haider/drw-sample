import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { setStatusBarColors, BackendService, LoginService } from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {LoginModule} from "./login/login.module"

@NgModule({
    providers: [
        BackendService,
        LoginService,
        
      ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        LoginModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
