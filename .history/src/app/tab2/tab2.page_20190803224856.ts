import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AllService } from '../shared/service/all.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  leagueLogo = true;
  leagueName: string;
  emptyComponent: boolean;
  teamObj: any;
  today: string;
  statusScore: string;
  constructor(private menu: MenuController,
              private service: AllService) {
    this.today = new Date().toISOString();
    this.leagueName = 'thaipremierleague';
    this.emptyComponent = false;
    this.setTeam();
  }
  onChangeLeague($event) {
    if ($event.target.value === 'premierleague') {
        this.leagueLogo = false;
        this.leagueName = 'premierleague';
    } else {
        this.leagueLogo = true;
        this.leagueName = 'thaipremierleague';
    }
  }
  onChangeDate() {
    console.log(this.today);
  }

  setTeam() {
    this.teamObj = [{
      homeImg: 'assets/img/Muangthong-United.png',
      homeTeam: 'เอสซีจี เมืองทอง ยูไนเต็ด',
      homeScore: 0,
      awayImg: 'assets/img/PT-Prachuap-FC.png',
      awayTeam: 'พีที ประจวบ เอฟซี',
      awayScore: 1
    }];
  }
}
