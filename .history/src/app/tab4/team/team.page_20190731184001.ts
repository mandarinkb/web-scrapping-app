import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  homeImg = 'assets/img/Muangthong-United.png';
  homeTeam = 'เอสซีจี เมืองทอง ยูไนเต็ด';
  league: string;

  leagueComponent: boolean;
  teams: any;
  constructor(private route: ActivatedRoute) {
    this.league = this.route.snapshot.paramMap.get('league');
    console.log(this.league);
    if (this.league === 'ไทยลีก') {
       this.leagueComponent = true;
    }
    if (this.league === 'พรีเมียร์ลีก') {
      this.leagueComponent = false;
    }

    this.teams = ['เอสซีจี เมืองทอง ยูไนเต็ด', 'พีที ประจวบ เอฟซี'];
  }

  ngOnInit() {
  }

}
