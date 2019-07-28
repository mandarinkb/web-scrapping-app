import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  leage = true;
  constructor(private menu: MenuController) {
    this.menu.close();
  }
  onChange($event) {
    if ($event.target.value === '2') {
      // console.log($event.target.value);
      this.leage = false;
    } else {
      this.leage = true;
    }
  }
}
