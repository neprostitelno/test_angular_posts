import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthorizationComponent} from "./Components/Authorization/authorization.component";
import {PostsComponent} from "./Components/Posts/posts.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import {PostsPageComponent} from "./Components/Pages/PostsPage.component";
import {NavbarComponent} from "./Components/Navbar/Navbar.component";
import {PostComponent} from "./Components/Post/post.component";
import {AuthGuardService} from "./Components/Services/AuthGuard.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    PostsComponent,
    PostsPageComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
