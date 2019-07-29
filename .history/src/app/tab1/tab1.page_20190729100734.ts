import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  league = true;
  homeScore = 1;
  awayScore = 0;
  statusScore: string;
  constructor(private menu: MenuController) {
    if (this.homeScore > this.awayScore) {
        this.statusScore = 'home-win';
    } else if (this.homeScore < this.awayScore) {
        this.statusScore = 'away-win';
    } else {
        this.statusScore = 'none';
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
