import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  league = true;
  constructor(private menu: MenuController) {}
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
