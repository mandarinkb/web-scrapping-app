import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.page.html',
  styleUrls: ['./players-detail.page.scss'],
})
export class PlayersDetailPage implements OnInit {
  img = 'assets/img/Prasit_Padungchok.jpg';
  player: string;
  constructor(private route: ActivatedRoute) {
    this.player = this.route.snapshot.paramMap.get('player');
    console.log(this.player);
   }

  ngOnInit() {
  }

}
