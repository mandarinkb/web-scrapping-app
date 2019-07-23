import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  leage = false;
  constructor() {
  }
  onChange($event) {
    if ($event.target.value === '2') {
      console.log($event.target.value);
    }
  }
}
