import {Component, OnInit} from "@angular/core";
import {AuthService} from "../Services/Auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'Navbar.component.html',
  styleUrls: ['Navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  constructor(private AuthService:AuthService) {
  }
  loginIn: boolean

  ngOnInit(): void {
    this.AuthService.isLoggedIn.subscribe(((status) => {
      this.loginIn = status
    }))
  }

  logout(): void {
    this.AuthService.logoutUser()
    console.log(this)
  }
}
