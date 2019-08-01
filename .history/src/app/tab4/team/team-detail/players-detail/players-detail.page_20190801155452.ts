import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';
@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.page.html',
  styleUrls: ['./players-detail.page.scss'],
})
export class PlayersDetailPage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  inputLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  inputData = [9.3, 5.6, 6.0, 7, 8.2, 7.1, 4.5, 5.9, 5, 9.1, 7.8, 6.3];

  labelName = 'ฟอร์มการเล่นแต่ละฤดูกาล';
  img = 'assets/img/Prasit_Padungchok.jpg';
  player: string;
  constructor(private route: ActivatedRoute) {
    this.player = this.route.snapshot.paramMap.get('player');
    console.log(this.player);
   }

  ngOnInit() {
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.inputLabel,
        datasets: [
          {
            label: this.labelName,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.inputData,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
