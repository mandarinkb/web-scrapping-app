import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  homeImg = 'assets/img/Muangthong-United.png';
  homeTeam = 'เอสซีจี เมืองทอง ยูไนเต็ด';
  players: any;
  team: string;
  teamObj: any;
  constructor(private route: ActivatedRoute) {
    this.team = this.route.snapshot.paramMap.get('team');
    console.log(this.team);
    this.setTeamObj(this.team);
    this.setPlayer();
  }

  ngOnInit() {
  }

  setTeamObj(inputTeam) {
    if (inputTeam === 'เอสซีจี เมืองทอง ยูไนเต็ด') {
        this.teamObj =  [{
        team: 'เอสซีจี เมืองทอง ยูไนเต็ด',
        teamImage: 'assets/img/Muangthong-United.png'
      }];
    }
    if (inputTeam === 'พีที ประจวบ เอฟซี') {
        this.teamObj =  [{
        team: 'พีที ประจวบ เอฟซี',
        teamImage: 'assets/img/PT-Prachuap-FC.png'
      }];
    }
  }

  setPlayer() {
    this.players =  [{
      number: '28',
      img: 'assets/img/Prasit_Padungchok.jpg',
      name: 'ประสิทธิ์ ผดุงโชค',
      position: 'ผู้รักษาประตู'
    }];
  }
}
