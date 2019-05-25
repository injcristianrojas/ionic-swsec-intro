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
  results: any;

  constructor(private postService:PostService) {
    this.postService.getPosts()
      .subscribe(
        (data) => {
          this.results = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    console.log(this.results);
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/posts', JSON.stringify(item)]);
  // }
}
