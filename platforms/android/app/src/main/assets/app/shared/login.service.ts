import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

import { User } from "./user.model";
import { BackendService } from "./backend.service";

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      BackendService.apiUrl + "register",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  login(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
   // alert(BackendService.apiUrl+"user:"+user.email+" pass:"+ user.password);
    return this.http.post(
      BackendService.apiUrl + "userlogin",
      {
        username: user.email,
        password: user.password
      }
    )
    .map(response => response.text() ? response.json() : response)
    .do(data => {
      //alert(JSON.stringify(data.id)+"_"+JSON.stringify(data.role)+JSON.stringify(data.username)+"this is result");
      //BackendService.token = JSON.stringify(data.id)+"_"+JSON.stringify(data.role)+"_"+JSON.stringify(data.username);
    })
    .catch(this.handleErrors);
  }

  logoff() {
    BackendService.token = "";
  }

  resetPassword(email) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      BackendService.apiUrl + "Users/resetpassword",
      JSON.stringify({
        Email: email
      }),
      { headers: headers }
    ).catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
