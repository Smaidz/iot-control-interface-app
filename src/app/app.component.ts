import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IoTBot Control App';
  introText = 'This device is based on:'
  totalAngularPackages;
  constructor(private http: HttpClient) { }

  ledsOn() {
    this.http.get<any>('http://87.110.81.238:255/bothOn?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  ledsOff() {
    this.http.get<any>('http://87.110.81.238:255/bothOff?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
