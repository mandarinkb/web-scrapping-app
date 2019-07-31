import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { App, AlertController} from 'ionic-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    public app: App,
  ) {
    this.initializeApp();
    platform.registerBackButtonAction(() => {

      const nav = app.getActiveNavs()[0];
      const activeView = nav.getActive();
      if (nav.canGoBack()) { // Can we go back?
          nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'ออกจากแอพพลิเคชัน',
            message: 'คุณต้องการออกจากแอพพลิเคชัน?',
            buttons: [{
              text: 'ยกเลิก',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            }, {
              text: 'ตกลง',
              handler: () => {
                this.platform.exitApp(); // Close this application
              }
            }]
          });
          alert.present();
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
