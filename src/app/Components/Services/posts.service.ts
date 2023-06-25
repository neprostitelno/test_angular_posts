import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/postModel";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {
  }

  posts: IPost[] = []

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe(delay(1000))
  }

  getPost(id:number):Observable<IPost>{
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
