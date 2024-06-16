import { Component, Inject, PLATFORM_ID, ViewChild } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'primeng/chart';
import { environment } from "../../environment";

@Component({
  selector: 'app-homepage',
  standalone: true,
 
  
  imports: [
            ChartModule,
            FontAwesomeModule,
        
            ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    data1: any;
    data2: any;
    data3: any;
    data_proportion: any;
    options: any;

    lat = 13.7563; // Default latitude for centering map
    lng = 100.5018; // Default longitude for centering map
    zoom = 12; // Default zoom level for map

    constructor() {
        this.data1 = {
            labels: ['2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563', '2564', '2565'],
            datasets: [
                {
                    label: 'รายได้รวม 5ปีล่าสุด 2565 (บาท)',
                    data: [1000000000, 800000000, 600000000, 400000000, 200000000], 
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };

        this.data2 = {
          labels: ['2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563', '2564', '2565'],
          datasets: [
              {
                  label: 'กำไร(ขาดทุน) 5ปีล่าสุด 2565 (บาท)',
                  data: [5000000, 4000000, 3000000, 2000000, 1000000, -1000000, -20000000],
                  fill: false,
                  borderColor: '#4bc0c0'
              }
          ]
      };
      
      this.data3 = {
        labels: ['2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563', '2564', '2565'],
        datasets: [
            {
                label: 'สินทรัพย์รวม 5ปีล่าสุด 2565 (บาท)',
                data: [50000000, 40000000, 30000000, 20000000, 10000000, 0],
                fill: false,
                borderColor: '#4bc0c0'
            }
        ]
    };
      this.data_proportion = {
        labels: ['ก', 'บี', 'ค'],
        datasets: [
            {
                data: [50, 50, 0],
                backgroundColor: [
                    'rgb(5, 227, 149)',
                    'rgb(6, 143, 250)',
                    '#FCB018'
                ],
            }
        ]
    };

        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        
    }
    


 


    
}
 
