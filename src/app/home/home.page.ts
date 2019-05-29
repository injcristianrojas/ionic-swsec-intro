import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginmodalPage } from '../loginmodal/loginmodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController:ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: LoginmodalPage
    });
 
    modal.onDidDismiss().then((data) => {
      if (data !== null) {
        
      }
    });
 
    return await modal.present();
  }

}
