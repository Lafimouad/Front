import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartsSarraService } from '../charts-sarra.service';
@Component({
  selector: 'app-charts-sarra',
  templateUrl: './charts-sarra.component.html',
  styleUrls: ['./charts-sarra.component.css']
})
export class ChartsSarraComponent implements AfterViewInit {
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;

  pieChart: any;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;
  constructor() { }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
    this.barChartMethod();
  }
  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Deliveries', 'Deliverers', 'Promotions'],
        datasets: [{
          label: '',
          data: [44, 15, 4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  pieChartBrowser(): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Great', 'Good', 'Awful', 'Late', 'Punctual', 'Absent'],
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c'
          ],
          data: [25, 15, 10, 10, 35, 5]
        }]
      }
    });
  }
  /*
  public onButton() : void {
    this.show=true;
    this.dataCases.chart1.push(this.JAN,this.FEB,this.MAR, this.APR , this.MAY , this.JUN)
    this.onCreate();
  }

  public onCreate() : void {
    console.log(this.dataCases);
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }

  public getJAN() : void{
    this.service.getJAN().subscribe(
      (response: number) => {
        console.log(response);
        this.JAN = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public getFEB(): void {
    this.service.getFEB().subscribe(
      (response: number) => {
        console.log(response);
        this.FEB = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMAR(): void {
    this.service.getMAR().subscribe(
      (response: number) => {
        console.log(response);
        this.MAR = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAPR(): void {
    this.service.getAPR().subscribe(
      (response: number) => {
        console.log(response);
        this.APR = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getJUN(): void {
    this.service.getJUN().subscribe(
      (response: number) => {
        console.log(response);
        this.JUN = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMAY(): void {
    this.service.getMAY().subscribe(
      (response: number) => {
        console.log(response);
        this.MAY = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "number of subscribers",
          data: dataCases.chart1,
          backgroundColor: '#ffbb33',
          borderColor: '#ffbb33',
          fill: false,
          borderWidth: 2
        }]
      },
      options: {
        title: {
          display: true,
          text: "Subscription By Month"
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        
      }
    });
  } 
*/
}
