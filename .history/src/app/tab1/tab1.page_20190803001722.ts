import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../shared/service/all.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  subscription: any;
  league = true;
  leagueName: string;

  today: string;
  statusScore: string;

  teamObj: any;
  constructor(private menu: MenuController ,
              private platform: Platform,
              private service: AllService) {
    this.today = new Date().toISOString();
    this.leagueName = 'thaipremierleague';
    // iconทีมชนะ
/*    if (this.homeScore > this.awayScore) {
        this.statusScore = 'home-win';
    } else if (this.homeScore < this.awayScore) {
        this.statusScore = 'away-win';
    }
*/
    console.log(this.today);
    console.log(this.leagueName);
    this.readResults(this.leagueName, this.today);
    //this.setTeamObj();
  }
  onChangeLeague($event) {
    if ($event.target.value === 'premierleague') {
        this.league = false;
        this.leagueName = 'premierleague';
    } else {
        this.league = true;
        this.leagueName = 'thaipremierleague';
    }
    console.log($event.target.value);
  }
  onChangeDate() {
    console.log(this.today);
  }

  readResults(inputLeague , inputDate) {
    const objForm = {
      league: inputLeague,
      date: inputDate
    };
    const jsonForm = JSON.stringify(objForm);
    // console.log(jsonForm);
    this.service.postResult(jsonForm).subscribe((res: any) => {
      this.teamObj = res;
    }, err => {

    });
  }

  setTeamObj() {
    this.teamObj =  [{
                        homeTeam: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        homeImg: 'assets/img/Muangthong-United.png',
                        homeScore: 3,
                        awayTeam: 'พีที ประจวบ เอฟซี',
                        awayImg: 'assets/img/PT-Prachuap-FC.png',
                        awayScore: 2
                      },
                      {
                        homeTeam: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        homeImg: 'assets/img/Muangthong-United.png',
                        homeScore: 3,
                        awayTeam: 'พีที ประจวบ เอฟซี',
                        awayImg: 'assets/img/PT-Prachuap-FC.png',
                        awayScore: 2
                      },
                      {
                        homeTeam: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        homeImg: 'assets/img/Muangthong-United.png',
                        homeScore: 3,
                        awayTeam: 'พีที ประจวบ เอฟซี',
                        awayImg: 'assets/img/PT-Prachuap-FC.png',
                        awayScore: 2
                      },
                      {
                        homeTeam: 'เอสซีจี เมืองทอง ยูไนเต็ด',
                        homeImg: 'assets/img/Muangthong-United.png',
                        homeScore: 3,
                        awayTeam: 'พีที ประจวบ เอฟซี',
                        awayImg: 'assets/img/PT-Prachuap-FC.png',
                        awayScore: 2
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
