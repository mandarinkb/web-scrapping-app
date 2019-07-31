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
  constructor(private route: ActivatedRoute) {
    this.team = this.route.snapshot.paramMap.get('team');
    console.log(this.team);
    this.players = ['a', 'b', 'c', 'd'];
  }

  ngOnInit() {
  }

}
