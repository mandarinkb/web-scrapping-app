import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  league = true;

  homeImg = 'http://www.livesoccer888.com/images/teams/24x24/PT-Prachuap-FC.png';
  homeTeam = 'เอสซีจี เมืองทอง ยูไนเต็ด';
  homeScore = 0;

  awayImg = 'http://www.livesoccer888.com/images/teams/24x24/Port-FC.png';
  awayTeam = 'พีที ประจวบ เอฟซี';
  awayScore = 1;

  statusScore: string;
  constructor(private menu: MenuController) {
    // iconทีมชนะ
    if (this.homeScore > this.awayScore) {
        this.statusScore = 'home-win';
    } else if (this.homeScore < this.awayScore) {
        this.statusScore = 'away-win';
    }

  }
  onClick(league: string) {
    this.menu.close();
    console.log(league);
    if (league === 'premierleague') {
      this.league = false;  // เปิดไทยลีก component
    } else {
      this.league = true;  // เปิดพรีเมียร์ลีก component
    }
  }
}
