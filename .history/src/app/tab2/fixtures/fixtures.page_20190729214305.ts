import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.page.html',
  styleUrls: ['./fixtures.page.scss'],
})
export class FixturesPage implements OnInit {
  homeImg = 'assets/img/Muangthong-United.png';
  awayImg = 'assets/img/PT-Prachuap-FC.png';
  constructor() { }

  ngOnInit() {
  }

}
