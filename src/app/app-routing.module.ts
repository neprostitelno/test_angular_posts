import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "./Components/Authorization/authorization.component";
import {PostsPageComponent} from "./Components/Pages/PostsPage.component";
import {PostComponent} from "./Components/Post/post.component";
import {AuthGuardService} from "./Components/Services/AuthGuard.service";
import {NavbarComponent} from "./Components/Navbar/Navbar.component";

const routes: Routes = [
  { path: '',       component: AuthorizationComponent },
  { path: 'login',  component: AuthorizationComponent },
  { path: 'posts',   component: PostsPageComponent, canActivate: [AuthGuardService] },
  { path: 'post/:id', component: PostComponent, canActivate: [AuthGuardService]},
  { path: '**',     component: AuthorizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthorizationComponent]
})
export class AppRoutingModule { }
