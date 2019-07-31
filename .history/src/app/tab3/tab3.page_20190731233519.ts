import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  league = true;
  constructor() {}
  onChoose($event) {
    console.log($event.target.value);
  }
  onChange($event) {
    if ($event.target.value === '2') {
        this.league = false;
    } else {
        this.league = true;
    }
  }
}
