import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.page.html',
  styleUrls: ['./loginmodal.page.scss'],
})
export class LoginmodalPage implements OnInit {

  username:string;
  password:string;

  constructor(private modalController:ModalController, private postService:PostService) { }

  dismissModalLogin() {
    this.postService.getJWTToken(this.username, this.password);
    this.modalController.dismiss();
  }

  dismissModalLogout() {
    this.postService.invalidateJWTToken()
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
