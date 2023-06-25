import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthorizationComponent} from "../Authorization/authorization.component";
import {AuthService} from "./Auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn.value) {
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }
}

