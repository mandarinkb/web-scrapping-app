import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  league: string;
  constructor(private route: ActivatedRoute) {
    this.league = this.route.snapshot.paramMap.get('league');
    console.log(this.league);
  }

  ngOnInit() {
  }

}
