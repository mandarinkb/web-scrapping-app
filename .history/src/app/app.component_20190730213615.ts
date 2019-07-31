import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TabsPage } from '../pages/tabs/tabs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any = TabsPage;
  public alertShown = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.alertShown === false) {
          this.presentConfirm();
        }
      }, 0);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  presentConfirm() {
    const alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }
}
