import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  league = true;

  homeImg = 'assets/img/Muangthong-United.png';
  homeTeam = 'เอสซีจี เมืองทอง ยูไนเต็ด';
  homeScore = 0;

  awayImg = 'assets/img/PT-Prachuap-FC.png';
  awayTeam = 'พีที ประจวบ เอฟซี';
  awayScore = 1;

  today;
  statusScore: string;
  constructor(private menu: MenuController) {
    this.today = new Date().toISOString();
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
