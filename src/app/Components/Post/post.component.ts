import {Component, OnInit} from "@angular/core";
import {IPost} from "../models/postModel";
import {PostsService} from "../Services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./../Posts/posts.component.sass']
})
export class PostComponent implements OnInit{
  id: number
  post:IPost
  constructor(public postsService: PostsService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(){

    this.postsService.getPost(this.id).subscribe(res => { this.post = res})

  }
}
