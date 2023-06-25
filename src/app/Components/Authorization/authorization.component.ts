import {Component, inject, Injectable, Input} from "@angular/core"

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {usersData} from "../Data/usersData";
import {IUsers} from "../models/usersModel";
import {Router} from "@angular/router";
import {NavbarComponent} from "../Navbar/Navbar.component";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../Services/Auth.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['authorization.component.sass']
})
export class AuthorizationComponent{
  constructor(private router: Router, private AuthService:AuthService) {}

  @Input() users: IUsers
  authorisationForm = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });



  onSubmit(){
    for(let i = 0; i < usersData.length; i++){
      if(this.authorisationForm.value.login === usersData[i].login &&
        this.authorisationForm.value.password === usersData[i].password){
        this.AuthService.loginUser()
        break
      }
    }
    this.router.navigate(['/posts'])
  }
}
