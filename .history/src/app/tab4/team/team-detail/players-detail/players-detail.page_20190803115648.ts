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

  inputLabel = ['2019', '2018', '2017', '2016', '2015', '2014'];
  inputData = [9.32, 7.61, 8.03, 7.58, 8.23, 7.17];
  inputData2 = [8.1, 7.5, 7.4, 9.1, 7.5, 8.9];

  labelName = 'ฟอร์มการเล่นแต่ละฤดูกาล';
  labelName2 = 'ฟอร์มการเล่นแต่ละฤดูกาล2';
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
          },
          {
            label: this.labelName2,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(231, 117, 170, 0.8)',
            borderColor: 'rgba(231, 45, 162, 0.8)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(231, 45, 162, 0.8)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(231, 45, 162, 0.8)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.inputData2,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
