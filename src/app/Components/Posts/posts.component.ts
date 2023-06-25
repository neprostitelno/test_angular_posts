import {Component, Input  } from "@angular/core"
import {IPost} from "../models/postModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['posts.component.sass']
})
export class PostsComponent{
@Input() posts:IPost
}
