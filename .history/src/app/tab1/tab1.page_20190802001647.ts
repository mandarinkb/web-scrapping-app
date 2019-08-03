import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  subscription: any;
  league = true;

  homeImg = 'assets/img/Muangthong-United.png';
  homeTeam = 'เอสซีจี เมืองทอง ยูไนเต็ด';
  homeScore = 2;

  awayImg = 'assets/img/PT-Prachuap-FC.png';
  awayTeam = 'พีที ประจวบ เอฟซี';
  awayScore = 1;

  today: string;
  statusScore: string;

  teamObj: any;
  constructor(private menu: MenuController ,
              private platform: Platform) {
    this.today = new Date().toISOString();
    // iconทีมชนะ
    if (this.homeScore > this.awayScore) {
        this.statusScore = 'home-win';
    } else if (this.homeScore < this.awayScore) {
        this.statusScore = 'away-win';
    }

  }
  onChange($event) {
    if ($event.target.value === '2') {
        this.league = false;
    } else {
        this.league = true;
    }
  }
  onChangeDate() {
    console.log(this.today);
  }

  setTeamObj() {
    this.teamObj =  [{
                        team: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        teamImage: 'assets/img/Muangthong-United.png'
                      },
                      {
                        team: 'พีที ประจวบ เอฟซี',
                        teamImage: 'assets/img/PT-Prachuap-FC.png'
                      },
                      {
                        team: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        teamImage: 'assets/img/Muangthong-United.png'
                      },
                      {
                        team: 'พีที ประจวบ เอฟซี',
                        teamImage: 'assets/img/PT-Prachuap-FC.png'
                      }
                    ];
  }






  // ปิด app เมื่อกดปุ่ม back button
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
         navigator['app'].exitApp();
    });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  // end function ปิด app เมื่อกดปุ่ม back button
}
