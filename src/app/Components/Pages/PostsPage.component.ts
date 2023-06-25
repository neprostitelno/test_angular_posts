import {Component, OnInit} from "@angular/core";
import {PostsService} from "../Services/posts.service";
import {IPost} from "../models/postModel";


@Component({
  selector: 'app-posts-page',
  templateUrl: 'PostsPage.component.html',
})
export class PostsPageComponent implements OnInit {
  loading = false
  posts: IPost[] = []

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.postsService.getPosts().subscribe(res => {this.posts = res}, null , () => (this.loading = false))

  }

}
