import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.page.html',
  styleUrls: ['./fixtures.page.scss'],
})
export class FixturesPage implements OnInit {
  homeImg = 'assets/img/Muangthong-United.png';
  awayImg = 'assets/img/PT-Prachuap-FC.png';
  id: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
  }

}
