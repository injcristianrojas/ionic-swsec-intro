import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService, Post } from './../services/post.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss']
})
export class PostsPage implements OnInit {

  private myInput: string = '';
  public items: Array<{ title: string; note: string; }> = [];

  constructor(private postService: PostService, public loadingController: LoadingController) {
    this.getPosts();
  }

  getPosts() {
    this.items = [];
    this.postService.getPosts()
      .then((data: Post[]) => {
        data.forEach(post => {
          this.items.push({title: 'T', note: post.message})
        })
    });
  }

  async postMessage() {
    const loading = await this.loadingController.create({
      message: 'Posting...'
    });
    await loading.present();
    this.postService.postMessage(this.myInput)
      .then((data: Post[]) => {
        this.getPosts();
        this.myInput = '';
        loading.dismiss();
      }
    );

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/posts', JSON.stringify(item)]);
  // }
}
