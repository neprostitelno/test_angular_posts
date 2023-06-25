import {Injectable} from "@angular/core";
import {usersData} from "../Data/usersData";
import {AuthorizationComponent} from "../Authorization/authorization.component";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor() {
  }

  isLoggedIn = new BehaviorSubject(false);
  logoutUser() {
    this.isLoggedIn.next(false);
  }
  loginUser() {
    this.isLoggedIn.next(true);
  }
}
