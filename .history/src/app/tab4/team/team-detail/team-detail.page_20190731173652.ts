import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  team: string;
  constructor(private route: ActivatedRoute) {
    this.team = this.route.snapshot.paramMap.get('team');
    console.log(this.team);
  }

  ngOnInit() {
  }

}
