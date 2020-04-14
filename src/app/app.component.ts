import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iot-control-interface-app';
  totalAngularPackages;
  constructor(private http: HttpClient) { }

  ledsOn() {
    alert('on');
    this.http.get<any>('http://87.110.81.238:255/bothOn?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  ledsOff() {
    alert('off');
    this.http.get<any>('http://87.110.81.238:255/bothOff?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
