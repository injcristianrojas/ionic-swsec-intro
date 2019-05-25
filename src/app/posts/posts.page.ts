import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string; }> = [];

  constructor(private postService:PostService) {
    this.postService.getPosts()
      .then(data => {
        data.forEach(item => {
          this.items.push({title: 'T', note: item.message})
        })
      });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/posts', JSON.stringify(item)]);
  // }
}
