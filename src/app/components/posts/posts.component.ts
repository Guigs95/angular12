import { Component } from '@angular/core';
import { Post } from './model/interface/post'

@Component({
  selector: 'app-root',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  date = new Date;

  posts: Post[] = [
    {title: "Angular", content: "", loveIts: 3, created_at: this.date},
    {title: "HTML/CSS", content: "Un template, des divs et beaucoup de lignes", loveIts: 1, created_at: this.date},
    {title: "TypeScript", content: "Les possibles de l'impossible", loveIts: 1, created_at: this.date}
  ]

}
